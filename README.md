# HeroVerse 

Um aplicativo web interativo para explorar o universo dos super-heróis com estatísticas detalhadas e uma interface visual incrível.

## 🌐 Deploy

Este projeto está hospedado na **Vercel** e está pronto para produção.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3 e JavaScript Vanilla
- **Estilização**: Tailwind CSS + Custom CSS
- **Fonte**: Google Fonts (Inter, Bangers)
- **API de Dados**: [Superhero API](https://superheroapi.com/)
- **IA** (Opcional): Google Gemini API para tradução de descrições

## 📋 O que é o HeroVerse?

O HeroVerse é uma plataforma interativa que permite você:
- 🔍 Buscar super-heróis por nome (com autocomplete instantâneo)
- 📊 Visualizar estatísticas detalhadas em gráficos (Inteligência, Força, Velocidade, Resistência, Poder e Combate)
- 🎨 Desfrutar de uma interface moderna com glassmorphism
- 📱 Acessar em qualquer dispositivo (totalmente responsivo)

## 🚀 Como Funciona

### Fluxo da Aplicação

1. **Carregamento de Dados**: Ao abrir a página, a aplicação pré-carrega os dados dos super-heróis em background para garantir autocomplete instantâneo.

2. **Busca de Heróis**: 
   - Digite o nome do herói na barra de busca
   - O autocomplete sugere heróis em tempo real
   - Clique ou selecione o herói desejado

3. **Exibição de Dados**:
   - As estatísticas do herói aparecem em barras de progresso animadas
   - Cada atributo tem uma cor única para fácil identificação
   - As barras se animam suavemente ao carregar os dados

4. **Integração com API**:
   - Dados vêm da Superhero API (atualizada e gratuita)
   - Descrições podem ser traduzidas via Gemini API (quando configurada)
   - Carregamento automático com tratamento de erros

## 📁 Estrutura do Projeto

```
app/
├── index.html    # Estrutura HTML
├── style.css     # Estilos CSS
└── app.js        # Lógica JavaScript e integração com API
docs/             # Documentação
```

## ⚡ Funcionalidades Principais

✨ **Autocomplete Inteligente** - Busca instantânea sem complicações
📊 **Visualização de Stats** - Gráficos animados e responsivos
🎯 **Dark Mode Premium** - Interface escura e moderna
🔄 **Cache de Dados** - Melhora de performance
🛡️ **Tratamento de Erros** - Aplicação robusta

---

**Acesse em**: [Seu link Vercel aqui]
