# ✅ Guia de Testes e Validação

## 🧪 Plano de Testes

### **Testes Funcionais**

#### **Teste 1: Busca de Herói Válido**
| Passo | Ação | Resultado Esperado |
|-------|------|-------------------|
| 1 | Digite "Batman" no campo de busca | Campo aceita entrada |
| 2 | Clique em "Buscar" | Indicador de carregamento aparece |
| 3 | Aguarde resposta | Imagem, nome e dados aparecem |
| 4 | Verifique barra de estatísticas | Barras aparecem com valores |

**Critério de Passos:** ✅ Todos os passos completados com sucesso

---

#### **Teste 2: Herói Não Encontrado**
| Passo | Ação | Resultado Esperado |
|-------|------|-------------------|
| 1 | Digite "HeroiInexistente123" | Campo aceita entrada |
| 2 | Clique em "Buscar" | Carregamento começa |
| 3 | Aguarde resposta | Mensagem de erro aparece |
| 4 | Verifique mensagem | Texto é claro e amigável |

**Critério de Passos:** ✅ Erro tratado corretamente

---

#### **Teste 3: Busca com Campo Vazio**
| Passo | Ação | Resultado Esperado |
|-------|------|-------------------|
| 1 | Clique em "Buscar" sem digitar | Validação impede submissão |
| 2 | Verifique campo | Campo fica em foco |
| 3 | Digite espaços em branco | Validação rejeita |

**Critério de Passos:** ✅ Validação funciona

---

#### **Teste 4: Histórico de Buscas**
| Passo | Ação | Resultado Esperado |
|-------|------|-------------------|
| 1 | Busque 3 heróis diferentes | Cada busca é executada |
| 2 | Verifique "Buscas Recentes" | Últimos 3 aparecem como botões |
| 3 | Clique em um anterior | Busca é realizada automaticamente |
| 4 | Feche e reabra navegador | Histórico persiste |

**Critério de Passos:** ✅ LocalStorage funciona

---

#### **Teste 5: Cache de Requisições**
| Passo | Ação | Resultado Esperado |
|-------|------|-------------------|
| 1 | Busque "Superman" | Requisição é feita, dados retornam |
| 2 | Busque novamente | Carregamento é instantâneo (cache) |
| 3 | Verifique DevTools | Só uma requisição para API |

**Critério de Passos:** ✅ Cache reduz requisições

---

### **Testes de Responsividade**

#### **Desktop (1920x1080)**
```
[ ] Imagem herói aparece lado a lado com dados
[ ] Todas as barras de estatísticas visíveis
[ ] Texto bem espaçado
[ ] Sem overflow horizontal
[ ] Header alcançável
```

#### **Tablet (768x1024)**
```
[ ] Layout ajusta para 2 colunas
[ ] Toque em botões funciona
[ ] Scroll suave
[ ] Sem texto truncado
```

#### **Mobile (375x667)**
```
[ ] Layout muda para 1 coluna
[ ] Imagem escala corretamente
[ ] Botões clicáveis (mínimo 44px)
[ ] Texto legível
[ ] Sem scroll horizontal
```

---

### **Testes de Acessibilidade**

#### **Teclado**
```javascript
// Teste com apenas teclado (sem mouse)
// 1. Tab para navegar entre elementos
// 2. Enter para clicar no formulário
// 3. Space para clicar botões

Checklist:
[ ] Todos os botões alcançáveis pelo Tab
[ ] Focus visível em todos os elementos
[ ] Ordem de tabulação lógica
[ ] Enter está vinculado ao formulário
```

#### **Leitor de Tela**
```
Teste com NVDA ou JAWS:
[ ] Header é lido corretamente
[ ] Imagem tem alt text descritivo
[ ] Botões têm aria-label
[ ] Seções têm headings corretos
[ ] Mensagens de erro são anunciadas
```

#### **Contraste**
```
Verificar no Firefox DevTools:
[ ] Texto sobre fundo tem contraste ≥ 4.5:1
[ ] Ícones com contraste mínimo
[ ] Links destacados
[ ] Botões com bordas visíveis
```

---

### **Testes de Performance**

#### **Velocidade de Carregamento**
```bash
# Abrir DevTools (F12)
# Aba Network
# Limpar cache (Ctrl+Shift+Del)
# Recarregar página

Métricas esperadas:
[ ] DOMContentLoaded < 1s
[ ] Load < 2s
[ ] Tamanho total < 1MB
[ ] Imagens otimizadas
```

#### **Requisições à API**
```
Abrir DevTools → Network → XHR

Validar:
[ ] Primeira busca = 1 requisição
[ ] Segunda busca (cache) = 0 requisições
[ ] 5 buscas diferentes = 5 requisições
[ ] Tempo resposta < 500ms
```

---

### **Testes de Compatibilidade**

#### **Navegadores Suportados**
| Navegador | Versão | Status |
|-----------|--------|--------|
| Chrome | 90+ | ✅ Testado |
| Firefox | 88+ | ✅ Testado |
| Safari | 14+ | ✅ Testado |
| Edge | 90+ | ✅ Testado |
| IE 11 | 11 | ❌ Não suportado |

#### **Teste em Cada Navegador**
```javascript
// 1. Abrir em cada navegador
// 2. Buscar múltiplos heróis
// 3. Verificar:
    [ ] Layout correto
    [ ] Animações suaves
    [ ] Histórico funciona
    [ ] Cache funciona
    [ ] Sem erros no console
```

---

## 🔍 Casos de Teste Específicos

### **Caso 1: Nomes com Acento**
```
Entrada: "Homem-Aranha"
Esperado: Busca funciona ou mensagem clara
```

### **Caso 2: Múltiplos Espaços**
```
Entrada: "  Batman  "
Esperado: Normalizado para "batman"
```

### **Caso 3: Maiúsculas/Minúsculas**
```
Entrada: "SUPERMAN" vs "superman" vs "Superman"
Esperado: Todos retornam o mesmo resultado
```

### **Caso 4: Nomes Parciais**
```
Entrada: "bat"
Esperado: Retorna Batman ou avisa que é muito vago
```

### **Caso 5: Caracteres Especiais**
```
Entrada: "Batman@123#"
Esperado: Ignorar especiais ou avisar
```

---

## 📊 Checklist de Entrega

### **Arquivos**
```
[ ] README.md - Documentação SCRUM completa
[ ] GUIA_DE_USO.md - Instruções de uso
[ ] DOCUMENTACAO_TECNICA.md - Detalhes técnicos
[ ] templates/index.html - HTML5 semântico
[ ] static/style.css - Estilos CSS3 personalizados
[ ] js/app.js - Código JavaScript Vanilla
```

### **Funcionalidades**
```
[ ] Busca por nome funcionando
[ ] Exibição de imagem
[ ] Informações básicas (nome, altura, peso, editora)
[ ] Estatísticas de poder com barras visuais
[ ] Tratamento de erros adequado
[ ] Histórico de buscas
[ ] Cache funcionando
[ ] Layout responsivo
```

### **Documentação**
```
[ ] Descrição do Produto
[ ] Papéis SCRUM definidos
[ ] Product Backlog com 8 histórias
[ ] 4 Sprints planejadas
[ ] Cerimônias SCRUM descritas
[ ] Quadro Kanban exemplo
[ ] Stack de tecnologias completo
[ ] Justificativa SCRUM
```

### **Qualidade de Código**
```
[ ] Sem erros no console
[ ] Comentários explicativos
[ ] Nomes de variáveis claros
[ ] Funções bem documentadas
[ ] Sem código duplicado
[ ] Indentação consistente
[ ] Acessibilidade implementada
```

### **Performance**
```
[ ] Carregamento < 2s
[ ] Cache reduz requisições
[ ] Sem memory leaks
[ ] Otimização de imagens
[ ] CSS minificado (Tailwind CDN)
[ ] Sem scripts desnecessários
```

---

## 🚀 Processo de Testes Automatizado

### **Teste Rápido (2 minutos)**
```bash
1. Abrir http://localhost:8000/templates/index.html
2. Buscar "Batman" → Verificar resultado
3. Buscar "XYZ" → Verificar erro
4. Clicar histórico → Verificar busca anterior
5. Abrir DevTools → Verificar requisições
```

### **Teste Completo (15 minutos)**
```bash
1. Executar todos os testes funcionais
2. Testar em 2 resoluções diferentes
3. Testar com teclado apenas
4. Verificar DevTools (Network, Console)
5. Validar cache
6. Verificar acessibilidade básica
```

### **Teste em Produção (30 minutos)**
```bash
1. Teste em 3 navegadores diferentes
2. Teste em dispositivo mobile real
3. Teste com conexão 4G lenta
4. Teste com JavaScript desabilitado
5. Teste com LocalStorage desabilitado
6. Teste internacionalização
```

---

## 📝 Registro de Testes

Template para registrar resultados:

```
📅 Data: ___/___/______
👤 Testador: _________________
🖥️ Navegador: __________ v____
📱 Dispositivo: _______________

Testes Executados:
[ ] Busca Válida - Status: PASSOU/FALHOU
[ ] Herói Não Encontrado - Status: PASSOU/FALHOU
[ ] Campo Vazio - Status: PASSOU/FALHOU
[ ] Histórico - Status: PASSOU/FALHOU
[ ] Responsividade - Status: PASSOU/FALHOU

Bugs Encontrados:
1. ___________________________
2. ___________________________
3. ___________________________

Observações:
_________________________________
_________________________________

Assinado: ________________
```

---

## 🐛 Rastreamento de Bugs

### **Formato de Relatório:**
```
ID: BUG-001
Título: Descrição breve do problema
Severidade: Crítica / Alta / Média / Baixa
Descrição: Explicação detalhada
Passos para Reproduzir:
1. ...
2. ...
Resultado Esperado: ...
Resultado Real: ...
Ambiente: Windows 10, Chrome 90, localhost
Captura de Tela: [screenshot]
```

---

**🎓 Este guia resulta da aplicação de SCRUM com testes bem planejados!**
