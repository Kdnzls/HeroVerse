 /**
         * HERO VERSE - Lógica do Sistema
         * Responsável pela gestão de dados e integração com APIs.
         */

        const API_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
        const apiKey = ""; // Chave da API Gemini (vazia por padrão)
        let heroisCache = null;
        let debounceTimer = null; // Para o autocomplete

        const STATS = [
            { id: 'intelligence', label: 'Inteligência', color: 'bg-blue-500' },
            { id: 'strength', label: 'Força', color: 'bg-red-500' },
            { id: 'speed', label: 'Velocidade', color: 'bg-yellow-500' },
            { id: 'durability', label: 'Resistência', color: 'bg-green-500' },
            { id: 'power', label: 'Poder', color: 'bg-purple-500' },
            { id: 'combat', label: 'Combate', color: 'bg-orange-500' }
        ];

        // 1. Precarregar dados em background para o Autocomplete ser instantâneo
        async function preCarregarDados() {
            if (!heroisCache) {
                try {
                    const res = await fetch(API_URL);
                    if (res.ok) heroisCache = await res.json();
                } catch (err) {
                    console.warn("Falha no pré-carregamento. Vai carregar apenas na procura.");
                }
            }
        }

        function renderizarBaseStats() {
            const container = document.getElementById('container-estatisticas');
            if (!container) return;

            container.innerHTML = STATS.map(s => `
                <div>
                    <div class="flex justify-between text-[9px] font-black uppercase tracking-widest text-slate-500 mb-2">
                        <span>${s.label}</span>
                        <span id="val-${s.id}" class="text-slate-300">0%</span>
                    </div>
                    <div class="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div id="bar-${s.id}" class="h-full ${s.color} barra-progresso shadow-[0_0_10px_currentColor]" style="width: 0%"></div>
                    </div>
                </div>
            `).join('');
        }

        async function obterDescricaoTraduzida(heroi) {
            // 1. Gemini (se houver chave configurada)
            if (apiKey && apiKey.length > 10) {
                try {
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts: [{ text: `Escreve uma biografia curta e épica em português para o herói ${heroi.name}.` }] }] })
                    });
                    const data = await response.json();
                    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (text) return text;
                } catch (err) { 
                    console.warn("Gemini falhou, a usar fallback local..."); 
                }
            }

            // 2. Fallback Dados da API
            return `${heroi.name}, também conhecido como ${heroi.biography.fullName || 'Desconhecido'}. Primeira aparição: ${heroi.biography.firstAppearance || 'Desconhecida'}.`;
        }

        async function executarBusca(nome) {
            fecharSugestoesAtualizado(); // Fecha autocomplete ao procurar
            
            const ui = {
                loading: document.getElementById('carregando'),
                error: document.getElementById('mensagem-erro'),
                result: document.getElementById('resultado-heroi'),
                desc: document.getElementById('descricao-heroi')
            };

            if (!ui.loading || !ui.error || !ui.result) return;

            ui.error.classList.add('hidden');
            ui.result.classList.add('hidden');
            ui.loading.classList.remove('hidden');

            try {
                if (!heroisCache) {
                    const res = await fetch(API_URL);
                    if (!res.ok) throw new Error("Falha ao carregar API");
                    heroisCache = await res.json();
                }

                const termoBusca = nome.toLowerCase().trim();
                const heroi = heroisCache.find(h => 
                    h.name.toLowerCase() === termoBusca || 
                    h.name.toLowerCase().includes(termoBusca)
                );

                if (!heroi) throw new Error("Heroi não encontrado");

                document.getElementById('imagem-heroi').src = heroi.images.lg;
                document.getElementById('nome-heroi').textContent = heroi.name;
                document.getElementById('editora-heroi').textContent = heroi.biography.publisher || 'Independente';
                
                const altura = heroi.appearance.height[1] || 'Não Informado';
                const peso = heroi.appearance.weight[1] || 'Não Informado';
                
                document.getElementById('altura-heroi').textContent = altura === '0 cm' ? 'Não Informado' : altura;
                document.getElementById('peso-heroi').textContent = peso === '0 kg' ? 'Não Informado' : peso;

                ui.result.classList.remove('hidden');
                ui.desc.textContent = "A ler registos biográficos...";

                setTimeout(() => {
                    STATS.forEach(s => {
                        const val = heroi.powerstats[s.id] || 0;
                        const bar = document.getElementById(`bar-${s.id}`);
                        const label = document.getElementById(`val-${s.id}`);
                        if (bar) bar.style.width = `${val}%`;
                        if (label) label.textContent = `${val}%`;
                    });
                }, 100);

                const bio = await obterDescricaoTraduzida(heroi);
                ui.desc.textContent = bio;

                salvarHistorico(heroi.name);
            } catch (err) {
                ui.error.classList.remove('hidden');
            } finally {
                ui.loading.classList.add('hidden');
            }
        }

        function salvarHistorico(nome) {
            let hero = JSON.parse(localStorage.getItem('hero_h')) || [];
            hero = [nome, ...hero.filter(x => x !== nome)].slice(0, 10);
            localStorage.setItem('hero_h', JSON.stringify(hero));
            atualizarHistoricoUI();
        }

        function atualizarHistoricoUI() {
            const hero = JSON.parse(localStorage.getItem('hero_h')) || [];
            const container = document.getElementById('lista-historico');
            if (!container) return;

            container.innerHTML = hero.map(nome => `
                <button onclick="document.getElementById('entrada-busca').value='${nome.replace(/'/g, "\\'")}'; window.executarBuscaGlobal('${nome.replace(/'/g, "\\'")}')" 
                        class="px-5 py-2 glass-card rounded-2xl text-[10px] font-bold text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all uppercase tracking-widest">
                    ${nome}
                </button>
            `).join('');
        }


        // --- SISTEMA DE AUTOCOMPLETE ---
        // Função de Autocomplete Melhorada
        async function mostrarSugestoesAtualizado(termo) {
            const container = document.getElementById('autocomplete-sugestoes');
            const lista = document.getElementById('lista-sugestoes');
            
            if (!container || !lista) return;
            
            // Se termo vazio, fechar
            if (termo.length < 1) {
                container.classList.add('hidden');
                return;
            }

            // Garantir que os dados estão carregados
            if (!heroisCache) {
                await preCarregarDados();
            }

            if (!heroisCache) {
                lista.innerHTML = '<div class="px-6 py-4 text-slate-400 text-center text-sm">Falha ao carregar dados</div>';
                container.classList.remove('hidden');
                return;
            }

            // Filtrar heróis que correspondem ao termo
            const termoLower = termo.toLowerCase();
            const sugestoes = heroisCache
                .filter(h => h.name.toLowerCase().includes(termoLower))
                .slice(0, 8); // Máximo 8 sugestões

            if (sugestoes.length === 0) {
                lista.innerHTML = '<div class="px-6 py-4 text-slate-400 text-center text-sm">Nenhum herói encontrado</div>';
                container.classList.remove('hidden');
                return;
            }

            // Renderizar sugestões
            lista.innerHTML = sugestoes.map(heroi => {
                const nomeSeguro = heroi.name.replace(/'/g, "\\'");
                return `
                <button 
                    type="button"
                    onclick="window.selecionarSugestao('${nomeSeguro}'); return false;"
                    class="w-full px-6 py-3 text-left hover:bg-violet-600/20 transition-colors border-b border-slate-800/50 last:border-b-0 flex items-center space-x-4 group"
                >
                    <img src="${heroi.images.xs}" alt="${heroi.name}" class="w-8 h-8 rounded-lg object-cover group-hover:shadow-lg group-hover:shadow-violet-500/30 transition-all">
                    <div class="flex-1">
                        <div class="text-white font-bold text-sm">${heroi.name}</div>
                        <div class="text-slate-500 text-xs">${heroi.biography.publisher || 'Independente'}</div>
                    </div>
                    <div class="text-slate-600 text-xs font-mono">→</div>
                </button>
            `}).join('');

            container.classList.remove('hidden');
        }

        function fecharSugestoesAtualizado() {
            const container = document.getElementById('autocomplete-sugestoes');
            if (container) {
                container.classList.add('hidden');
            }
        }


        // Torna a função de seleção global para o onclick funcionar no HTML injetado
        window.selecionarSugestao = function(nome) {
            const input = document.getElementById('entrada-busca');
            input.value = nome;
            fecharSugestoesAtualizado();
            executarBusca(nome);
        };

        // Torna a busca acessível globalmente (botões de histórico)
        window.executarBuscaGlobal = executarBusca;

        // Inicialização dos Eventos
        document.addEventListener('DOMContentLoaded', () => {
            preCarregarDados(); // Prepara o terreno
            renderizarBaseStats();
            atualizarHistoricoUI();

            const form = document.getElementById('formulario-busca');
            const input = document.getElementById('entrada-busca');

            // Submissão do Formulário
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const termo = input.value.trim();
                    if (termo) executarBusca(termo);
                });
            }

            // Escuta do Input para Autocomplete
            if (input) {
                input.addEventListener('input', (e) => {
                    clearTimeout(debounceTimer);
                    const termo = e.target.value.trim();
                    
                    // Aguarda 250ms após o utilizador parar de escrever
                    debounceTimer = setTimeout(() => {
                        mostrarSugestoesAtualizado(termo);
                    }, 250);
                });

                // Abre as sugestões se o utilizador clicar na barra e já tiver texto
                input.addEventListener('focus', (e) => {
                    if (e.target.value.trim().length >= 1) {
                        mostrarSugestoesAtualizado(e.target.value.trim());
                    }
                });
            }

            // Fecha o autocomplete quando se clica fora dele
            document.addEventListener('click', (e) => {
                if (!e.target.closest('#formulario-busca')) {
                    fecharSugestoesAtualizado();
                }
            });
        });