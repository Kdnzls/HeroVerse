# 📖 Guia de Uso - Web App de Super-Heróis

## 🚀 Como Executar a Aplicação

### **Opção 1: Servidor Local (Recomendado)**

#### Usando Python 3:
```bash
cd c:\Users\kayck.diniz\Desktop\Projeto
python -m http.server 8000
```

Ou com Python 2:
```bash
python -m SimpleHTTPServer 8000
```

#### Usando Node.js com http-server:
```bash
npm install -g http-server
cd c:\Users\kayck.diniz\Desktop\Projeto
http-server
```

#### Usando Live Server no VS Code:
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `templates/index.html`
3. Selecione "Open with Live Server"

### **Opção 2: Abrir Diretamente no Navegador**
```bash
Pressione Windows + R
Digite: c:\Users\kayck.diniz\Desktop\Projeto\templates\index.html
Pressione Enter
```

**Após iniciar o servidor**, acesse:
```
http://localhost:8000/templates/index.html
```

---

## 📌 Como Usar a Aplicação

### 1️⃣ **Buscar um Super-Herói**
   - Digite o nome do herói no campo "Digite o nome do super-herói..."
   - Clique no botão "Buscar" ou pressione Enter
   - Aguarde o carregamento (você verá um spinner)

### 2️⃣ **Visualizar Informações**
   - **Imagem:** Foto do herói aparecerá no lado esquerdo
   - **Nome e Editora:** Exibidas no topo das informações
   - **Altura e Peso:** Mostrados em cards informativos
   - **Estatísticas:** Barras visuais coloridas mostram o poder em cada área

### 3️⃣ **Usar o Histórico**
   - Suas últimas 5 buscas aparecem na seção "Buscas Recentes"
   - Clique em qualquer herói anterior para buscar novamente
   - O histórico é salvo automaticamente no navegador

### 4️⃣ **Tratar Erros**
   - Se o herói não existir, aparecerá uma mensagem de erro
   - Tente com um nome diferente
   - A busca é case-insensitive (Batman = BATMAN = batman)

---

## 🔍 Alguns Super-Heróis para Testar

```
Batman
Superman
Wonder Woman
Iron Man
Spider-Man
The Flash
Aquaman
Black Panther
Captain America
Thor
```

---

## 🛠️ Estrutura de Arquivos

```
Projeto/
│
├── README.md                    # Documentação SCRUM completa
├── GUIA_DE_USO.md             # Este arquivo
│
├── templates/
│   └── index.html             # Arquivo HTML principal (semântico)
│
├── static/
│   └── style.css              # Estilos CSS personalizados
│
└── js/
    └── app.js                 # Lógica JavaScript (Vanilla JS)
```

---

## 💾 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **HTML5** | 5 | Estrutura semântica e acessibilidade |
| **CSS3** | 3 | Estilos e animações personalizadas |
| **Tailwind CSS** | CDN | Classes utilitárias e responsividade |
| **JavaScript Vanilla** | ES6+ | Lógica, DOM manipulation, Fetch API |
| **SuperHero API** | v1 | Fonte de dados dos super-heróis |

---

## 🔌 Integração com a API

### **URL Base:**
```
https://superheroapi.com/api/{access-token}
```

### **Endpoint Utilizado:**
```
GET /api/{access-token}/search/{hero-name}
```

### **Exemplo de Requisição:**
```javascript
fetch('https://superheroapi.com/api/10/search/batman')
    .then(response => response.json())
    .then(data => console.log(data))
```

### **Estrutura da Resposta:**
```json
{
    "response": "success",
    "results": [
        {
            "id": "1",
            "name": "Batman",
            "image": {
                "url": "https://...jpg"
            },
            "appearance": {
                "height": ["6'3", "188 cm"],
                "weight": ["210 lbs", "95 kg"]
            },
            "biography": {
                "publisher": "DC Comics"
            },
            "powerstats": {
                "strength": "26",
                "intelligence": "81",
                "speed": "29",
                "durability": "28",
                "power": "16",
                "combat": "100"
            }
        }
    ]
}
```

---

## 🎨 Recursos Visuais

### **Cores Utilizadas:**
- **Primária:** Purple (#a855f7)
- **Secundária:** Indigo (#6366f1)
- **Fundo:** Gray-900 (#111827)
- **Sucesso:** Green (#10b981)
- **Erro:** Red (#ef4444)

### **Animações:**
- ✨ Fade-in ao exibir resultado
- 🎬 Slide-in do header
- ⚡ Transição suave das barras de estatísticas
- 🌀 Spinner de carregamento

---

## 📊 Funcionalidades Implementadas

✅ Busca por nome de super-herói
✅ Exibição de imagem
✅ Informações básicas (nome, altura, peso, editora)
✅ Estatísticas de poder com barras visuais
✅ Tratamento de erros (herói não encontrado)
✅ Layout responsivo (mobile e desktop)
✅ Histórico de buscas recentes (LocalStorage)
✅ Cache de requisições (5 minutos)
✅ Interface acessível (labels, ARIA, focus)
✅ Design moderno com Tailwind CSS

---

## 🎓 Saiba Mais sobre SCRUM

Este projeto implementa todos os conceitos fundamentais de SCRUM:

- 📋 **Product Backlog:** 8 histórias de usuário bem definidas
- 🏃 **Sprints:** 4 sprints de 1 semana cada
- 📅 **Cerimônias:** Planning, Standup, Review, Retrospective
- 🗂️ **Quadro Kanban:** Acompanhamento de tarefas
- 👥 **Papéis:** PO, Scrum Master, Time de Desenvolvimento

Veja o arquivo **README.md** para documentação SCRUM completa!

---

## 🐛 Troubleshooting

### **Problema: "Herói não encontrado"**
- ✅ Verifique a ortografia do nome
- ✅ Tente nomes em inglês
- ✅ Use variações (Batman, The Dark Knight, etc.)

### **Problema: Imagem não aparece**
- ✅ Verifique conexão com a internet
- ✅ Verifique se o navegador permite CORS
- ✅ Abra o Console (F12) para ver erros

### **Problema: Histórico não volta**
- ✅ Verifique se o navegador tem LocalStorage ativado
- ✅ Limpe cache/cookies se necessário
- ✅ Use navegador em modo normal (não privado)

### **Problema: Servidor não inicia**
- ✅ Verifique se o Python ou Node.js estão instalados
- ✅ Tente porta diferente: `python -m http.server 3000`
- ✅ Feche outras aplicações que possam estar usando a porta

---

## 📞 Suporte

Se encontrar problemas, verifique:
1. **Console do Navegador:** F12 → Console
2. **Network Tab:** Verifique requisições para a API
3. **LocalStorage:** F12 → Application → Local Storage

---

## 🎯 Próximos Passos (Melhorias Futuras)

- 🌟 Sistema de favoritos
- 🔄 Comparar dois heróis
- 📊 Estatísticas gerais (herói mais forte, etc.)
- 🎨 Modo escuro/claro
- 🌐 Suporte a múltiplos idiomas
- 📱 App Progressive Web (PWA)

---

**Desenvolvido com 💜 Utilizando Metodologia SCRUM**

*Última atualização: 4 de março de 2026*
