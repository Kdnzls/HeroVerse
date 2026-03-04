# 🦸 Web App de Informações de Super-Heróis
## Projeto SCRUM Acadêmico

---

## 📌 Descrição do Produto

O **Web App de Informações de Super-Heróis** é uma aplicação simples e intuitiva que permite aos usuários buscar informações detalhadas sobre super-heróis em uma base de dados pública. O aplicativo consome dados da **SuperHero API** e exibe informações como:

- Nome do herói
- Imagem
- Altura e Peso
- Editora
- Estatísticas de poder (Força, Inteligência, Velocidade, Resistência, Poder, Combate)

**Objetivo do MVP:** Fornecer uma experiência de usuário simplificada para descobrir informações de super-heróis de forma rápida e visual.

---

## 👥 Definição dos Papéis SCRUM

### 👨‍💼 Product Owner (PO)
- **Responsabilidade:** Definir e priorizar os requisitos do produto
- **Atribuições:** Manter o Product Backlog, validar historias de usuário, garantir valor ao negócio
- **No projeto:** Responsável por decidir quais funcionalidades serão desenvolvidas primeiro

### 🎯 Scrum Master
- **Responsabilidade:** Facilitar o processo SCRUM e remover impedimentos
- **Atribuições:** Conduzir reuniões, garantir que a metodologia seja seguida, apoiar o time
- **No projeto:** Garante que o time cumpra o cronograma e entregue as funcionalidades

### 👨‍💻 Time de Desenvolvimento
- **Responsabilidade:** Implementar as funcionalidades do produto
- **Atribuições:** Estimar tarefas, desenvolveras funcionalidades, garantir qualidade do código
- **No projeto:** 3 Desenvolvedores responsáveis pela codificação em HTML5, CSS3 e JavaScript

---

## 📋 Product Backlog com Histórias de Usuário

### User Story 1: Buscar Super-Herói por Nome
**Como** usuário, **quero** buscar um super-herói por nome **para** encontrar informações sobre ele.
- **Critérios de Aceitação:**
  - Campo de busca funcional
  - Integração com a SuperHero API
  - Carregamento de dados em tempo real

### User Story 2: Exibir Imagem do Herói
**Como** usuário, **quero** visualizar a imagem do super-herói **para** identificá-lo visualmente.
- **Critérios de Aceitação:**
  - Imagem exibida após busca bem-sucedida
  - Layout responsivo para mobile

### User Story 3: Mostrar Informações Básicas
**Como** usuário, **quero** ver nome, altura, peso e editora **para** conhecer detalhes do herói.
- **Critérios de Aceitação:**
  - Informações formatadas e legíveis
  - Design visual atrativo

### User Story 4: Exibir Estatísticas de Poder
**Como** usuário, **quero** visualizar estatísticas (Força, Inteligência, Velocidade, etc.) **para** comparar com outros heróis.
- **Critérios de Aceitação:**
  - Gráfico visual das estatísticas
  - Valores percentuais claros

### User Story 5: Tratamento de Erro - Herói Não Encontrado
**Como** usuário, **quero** receber uma mensagem clara **quando** o herói não existir na base de dados.
- **Critérios de Aceitação:**
  - Mensagem de erro amigável
  - Sugestão de nova tentativa

### User Story 6: Interface Responsiva
**Como** usuário, **quero** usar o aplicativo em dispositivos móveis **para** acessá-lo em qualquer lugar.
- **Critérios de Aceitação:**
  - Design mobile-first
  - Componentes adaptáveis a diferentes tamanhos de tela

### User Story 7: Histórico de Buscas Recentes
**Como** usuário, **quero** acessar heróis que busquei recentemente **para** evitar digitar o nome novamente.
- **Critérios de Aceitação:**
  - Armazenamento local (LocalStorage)
  - Máximo de 5 buscas recentes

### User Story 8: Melhorar Performance da Aplicação
**Como** desenvolvedor, **quero** otimizar o carregamento da página **para** garantir melhor experiência do usuário.
- **Critérios de Aceitação:**
  - Tempo de carregar < 2 segundos
  - Cache de requisições na API

---

## 🏃 Planejamento de 4 Sprints

### **Sprint 1: Fundação e Integração com API** (1 semana)
**Objetivo:** Criar a estrutura base e conectar com a SuperHero API

**Histórias incluídas:**
- User Story 1 (Buscar Super-Herói por Nome)
- User Story 5 (Tratamento de Erro)

**Tarefas técnicas:**
- Criar estrutura HTML5
- Configurar Fetch API
- Implementar busca básica
- Implementar tratamento de erros

**Resultado esperado:** Aplicativo funcional capaz de buscar heróis e exibir mensagens de erro

---

### **Sprint 2: Exibição de Dados** (1 semana)
**Objetivo:** Exibir as informações do herói de forma visual

**Histórias incluídas:**
- User Story 2 (Exibir Imagem do Herói)
- User Story 3 (Mostrar Informações Básicas)

**Tarefas técnicas:**
- Estilizar layout com Tailwind CSS
- Exibir imagem do herói
- Formatar e exibir dados básicos (nome, altura, peso, editora)
- Criar cards responsivos

**Resultado esperado:** Interface visual atrativa com informações organizadas

---

### **Sprint 3: Funcionalidades Avançadas** (1 semana)
**Objetivo:** Adicionar recursos extras para melhorar a experiência

**Histórias incluídas:**
- User Story 4 (Exibir Estatísticas de Poder)
- User Story 7 (Histórico de Buscas Recentes)

**Tarefas técnicas:**
- Implementar barra visual das estatísticas
- Armazenar buscas no LocalStorage
- Criar interface para histórico recente
- Adicionar funcionalidade de clique no histórico

**Resultado esperado:** Aplicativo com recursos interativos e memória de buscas

---

### **Sprint 4: Polimento e Otimização** (1 semana)
**Objetivo:** Garantir qualidade, responsividade e performance

**Histórias incluídas:**
- User Story 6 (Interface Responsiva)
- User Story 8 (Melhorar Performance)

**Tarefas técnicas:**
- Testar responsividade em múltiplos dispositivos
- Otimizar requisições à API
- Implementar cache local
- Revisar código e documentação
- Testes de usabilidade

**Resultado esperado:** Aplicativo pronto para produção, otimizado e responsivo

---

## 📅 Cerimônias SCRUM

### 📆 Sprint Planning
- **Quando:** Início de cada Sprint (segunda-feira)
- **Duração:** 1 hora
- **Participantes:** Product Owner, Scrum Master, Time de Desenvolvimento
- **O que fazer:** Selecionar histórias do Product Backlog, estimar esforço, definir metas da Sprint
- **Resultado:** Sprint Backlog pronto para implementação

### 🗣️ Daily Standup
- **Quando:** Todos os dias (09:00 da manhã)
- **Duração:** 15 minutos
- **Participantes:** Time de Desenvolvimento, Scrum Master
- **Perguntas-chave:**
  - O que fiz ontem?
  - O que pretendo fazer hoje?
  - Há algum impedimento?
- **Resultado:** Sincronização do time e identificação de bloqueios

### 🎬 Sprint Review
- **Quando:** Fim da Sprint (sexta-feira à tarde)
- **Duração:** 1 hora
- **Participantes:** Todos do time + stakeholders
- **O que fazer:** Demonstrar incremento pronto do produto, coletar feedback
- **Resultado:** Product Backlog atualizado, aprendizados registrados

### 🔄 Sprint Retrospective
- **Quando:** Fim da Sprint (sexta-feira, após Sprint Review)
- **Duração:** 45 minutos
- **Participantes:** Time de Desenvolvimento, Scrum Master
- **Perguntas-chave:**
  - O que funcionou bem?
  - O que pode ser melhorado?
  - Ações para próxima Sprint?
- **Resultado:** Plano de melhorias para próxima Sprint

---

## 🗂️ Quadro Kanban

```
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│       TO DO (5)         │   IN PROGRESS (2)       │     DONE (3)            │
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ User Story 7: Histórico │ User Story 4: Exibir    │ User Story 1: Buscar    │
│ de Buscas Recentes      │ Estatísticas de Poder   │ Super-Herói             │
│                         │                         │                         │
│ User Story 8: Performance│ User Story 6: Interface │ User Story 2: Exibir    │
│                         │ Responsiva              │ Imagem                  │
│                         │                         │                         │
│ Testes Finais           │                         │ User Story 3: Info      │
│                         │                         │ Básicas                 │
│                         │                         │                         │
│ Documentação            │                         │ User Story 5: Tratamento│
│                         │                         │ de Erro                 │
│                         │                         │                         │
│ Deploy                  │                         │                         │
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

---

## 🛠️ Tecnologias Utilizadas

### 🌐 HTML5
- **Estrutura semântica** do documento
- **Campos de entrada** para busca
- **Seções organizadas** para exibição de dados
- **Acessibilidade** com labels e ARIA attributes

### 🎨 CSS3 + Tailwind CSS
- **Classes utilitárias** do Tailwind para estilização rápida
- **Design responsivo** mobile-first
- **Animações** suaves para melhor UX
- **Temas** e cores consistentes

### 💻 JavaScript Vanilla
- **Fetch API** para consumir a SuperHero API
- **Manipulação do DOM** - criação e atualização dinâmica
- **Event Listeners** para interatividade
- **LocalStorage** para armazenar histórico
- **Tratamento de exceções** para erros

### 🔌 SuperHero API
- **Endpoint:** https://superheroapi.com/api/access-token
- **Método:** GET
- **Resposta:** JSON com dados do herói

---

## 🎯 Objetivo do MVP (Minimum Viable Product)

O MVP do Web App deve:

✅ **Funcionalidade principal:** Permitir buscar super-heróis por nome
✅ **Exibição visual:** Mostrar imagem, nome, altura, peso, editora
✅ **Tratamento de erros:** Mensagem clara quando herói não existe
✅ **Interface simples:** Design limpo e intuitivo
✅ **Responsivo:** Funcionar em mobile e desktop
✅ **Performance:** Carregar em menos de 2 segundos

**Não inclusos no MVP:**
- Autenticação de usuários
- Sistema de favoritos com backend
- Comparação avançada de heróis
- Filtros complexos

---

## 📊 Justificativa da Aplicação da Metodologia SCRUM

### Por que SCRUM?

#### 1. **Entrega Iterativa de Valor**
- Dividindo o projeto em 4 Sprints, entregamos funcionalidades completas regularmente
- A cada Sprint, há um incremento funcional pronto para uso

#### 2. **Adaptabilidade**
- Se requisitos mudam ou novos problemas surgem, ajustamos o backlog
- A Retrospectiva permite melhorias contínuas

#### 3. **Comunicação Clara**
- Daily Standups mantêm o time sincronizado
- Reduz mal-entendidos e bloqueios

#### 4. **Qualidade Monitorada**
- Sprint Review garante que o produto atenda aos requisitos
- Testes contínuos durante cada Sprint

#### 5. **Processo Acadêmico Realista**
- SCRUM é amplamente usado na indústria
- Estuda metodologia prática e aplicável
- Simula ambiente real de desenvolvimento

#### 6. **Estimativas e Planejamento**
- Histórias de usuário bem definidas facilitam estimativas
- Planning Poker (opcional) ajuda a alinhar esforço

#### 7. **Responsabilidade e Autonomia**
- O time sabe o que entregar e quando
- Cada membro tem responsabilidades claras

---

## 🎓 Conclusão

Este projeto demonstra como a metodologia SCRUM, quando bem aplicada, oferece uma estrutura clara para o desenvolvimento de software. Através de Sprints bem planejadas, cerimônias eficientes e um Product Backlog bem priorizado, conseguimos entregar um MVP funcional de forma organizada e previsível.

O Web App de Super-Heróis é um exemplo prático e didático que ilustra todos os conceitos fundamentais do SCRUM em uma escala simples e educacional.

---

**Desenvolvido com 🦸 Metodologia SCRUM**
