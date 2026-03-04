# 🔧 Debug e Troubleshooting - Web App de Super-Heróis

## ❌ Erro: "Failed to fetch" ou "Erro ao buscar herói"

Este é o problema mais comum. Significa que a aplicação não conseguiu conectar à SuperHero API.

### 🔍 Causas Possíveis:

1. **Sem conexão de internet** ❌
2. **API fora do ar momentaneamente** ⏸️
3. **Bloqueio CORS (Cross-Origin Resource Sharing)** 🚫
4. **Firewall/Proxy bloqueando requisições** 🔒
5. **Erro na URL da API** 🌐

---

## ✅ Soluções

### **Solução 1: Verificar Conexão de Internet**

```bash
# Abra o Terminal/Prompt e execute:
ping google.com

# Se receber respostas OK, internet está funcionando
```

### **Solução 2: Verificar APIs Funcionando**

Abra o console do navegador (F12) e execute:

```javascript
// Teste 1 - URL Principal
fetch('https://www.superheroapi.com/api/10/search/batman')
    .then(r => r.json())
    .then(d => console.log('✅ API 1 Funcionando:', d))
    .catch(e => console.error('❌ API 1 Erro:', e.message));

// Teste 2 - URL Alternativa
fetch('https://superheroapi.com/api/1/search/batman')
    .then(r => r.json())
    .then(d => console.log('✅ API 2 Funcionando:', d))
    .catch(e => console.error('❌ API 2 Erro:', e.message));
```

Se um funcionou, a API está acessível.

### **Solução 3: Usar Proxy CORS**

Se as APIs diretas não funcionarem, vamos usar um proxy:

**Opção A: Heroku CORS Proxy**

```javascript
// No console, teste:
const url = 'https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/10/search/batman';

fetch(url)
    .then(r => r.json())
    .then(d => console.log('Funcionou:', d))
    .catch(e => console.log('Erro:', e));
```

Se funcionou, o proxy está ativo! Se não, vá para https://cors-anywhere.herokuapp.com e clique em "Request temporary access".

**Opção B: Usar AllOrigins Proxy**

```javascript
const nome = 'batman';
const apiUrl = `https://www.superheroapi.com/api/10/search/${nome}`;
const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;

fetch(proxyUrl)
    .then(r => r.json())
    .then(d => console.log('Funcionou:', d))
    .catch(e => console.log('Erro:', e));
```

---

## 🛠️ Como Ativar o Proxy no Código

Se o proxy funcionar, você pode ativar no `app.js`:

### **Método 1: Editar CONFIG**

Abra `js/app.js` e mude a linha ~11:

```javascript
const CONFIG = {
    API_URLS: [
        'https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/10', // Com proxy
        'https://www.superheroapi.com/api/10', // Direto
    ],
    // ... resto do config
};
```

### **Método 2: Usar AllOrigins**

Edite a função `tentarTodasAsAPIs` em `js/app.js` (linha ~80):

```javascript
async function tentarTodasAsAPIs(nomeNormalizado) {
    let ultimoErro = null;
    
    for (const apiUrl of CONFIG.API_URLS) {
        try {
            // Tentar com proxy AllOrigins
            const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}/search/${nomeNormalizado}`;
            console.log(`📡 Tentando: ${proxyUrl}`);
            
            const resposta = await fetchComTimeout(proxyUrl);
            
            if (!resposta.ok) {
                console.warn(`⚠️ Status ${resposta.status}`);
                ultimoErro = `Erro HTTP: ${resposta.status}`;
                continue;
            }

            const dados = await resposta.json();

            if (!dados.results || dados.results.length === 0) {
                ultimoErro = 'Herói não encontrado';
                continue;
            }

            console.log(`✅ API funcionando!`);
            return dados.results[0];

        } catch (erro) {
            console.warn(`⚠️ Erro:`, erro.message);
            ultimoErro = erro.message;
            continue;
        }
    }
    
    throw new Error(ultimoErro || 'Não foi possível conectar à API');
}
```

---

## 🧪 Como Debugar no Navegador

### **Abra o Console (F12)**

1. Abra o navegador e vá para a aplicação
2. Pressione **F12** (ou Ctrl+Shift+I)
3. Vá até a aba **Console**

### **Você verá logs assim:**

```
🦸 Inicializando Web App de Super-Heróis
📡 APIs disponíveis: [...]
⏱️ Timeout de conexão: 8000 ms
💾 Cache ativo por: 5 minutos
✅ Aplicação inicializada com sucesso
💡 Dica: Abra o Console (F12) para debugging...

[Ao buscar]

🔍 Buscando herói: batman
📡 Tentando: https://www.superheroapi.com/api/10/search/batman
✅ API funcionando: https://www.superheroapi.com/api/10
✅ Herói encontrado: {name: "Batman", ...}
🎨 Exibindo herói na interface
```

### **Se houver erro:**

```
❌ Erro ao buscar herói: Failed to fetch
⚠️ Erro em https://www.superheroapi.com/api/10/search/batman: Failed to fetch
❌ Exibindo erro: Não foi possível conectar à API
```

---

## 🔗 Teste por URL

Tente acessar estas URLs diretamente no navegador:

### **URL 1:**
```
https://www.superheroapi.com/api/10/search/batman
```

Se retornar JSON com dados, a API está funcionando.

### **URL 2:**
```
https://superheroapi.com/api/1/search/batman
```

### **URL 3 (Com Proxy):**
```
https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.superheroapi.com%2Fapi%2F10%2Fsearch%2Fbatman
```

Se alguma funcionar, ótimo! Você pode usar essa URL.

---

## 🖥️ Usar Backend Local (Solução Permanente)

Para evitar problemas CORS, crie um arquivo `server.py`:

```python
from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
from urllib.request import urlopen
from urllib.parse import quote

class MyHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/api/search/'):
            hero_name = self.path.split('/api/search/')[1]
            
            try:
                url = f'https://www.superheroapi.com/api/10/search/{hero_name}'
                response = urlopen(url)
                data = json.loads(response.read())
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(data).encode())
            except:
                self.send_response(500)
                self.end_headers()
        else:
            super().do_GET()

if __name__ == '__main__':
    server = HTTPServer(('localhost', 8000), MyHandler)
    print('🚀 Servidor rodando em http://localhost:8000')
    server.serve_forever()
```

Salve como `server.py` e execute:
```bash
python server.py
```

Depois mude o `app.js`:
```javascript
const CONFIG = {
    API_URLS: [
        'http://localhost:8000/api/search', // Seu servidor local
    ],
    // ... resto
};
```

E adapte `tentarTodasAsAPIs`:
```javascript
const url = `${apiUrl}/${nomeNormalizado}`;
```

---

## 📊 Checklist de Debug

```
[ ] Conexão de internet funcionando (ping google.com)
[ ] Console (F12) aberto mostrando logs
[ ] URLs da API testadas manualmente no navegador
[ ] CORS proxy testado (allorigins.win)
[ ] Logs do console não mostram erros de sintaxe
[ ] Histórico de buscas está em LocalStorage
[ ] Cache está funcionando (2ª busca é instantânea)
[ ] Mobile responsivo testado
[ ] Sem caracteres < ou > que quebrem JSON
```

---

## 🚀 Ativando Modo Debug Avançado

Adicione isto ao início de `app.js` para mais verbosidade:

```javascript
// Modo Debug (remova depois)
const DEBUG = true;

function debug(...args) {
    if (DEBUG) console.log('%c[DEBUG]', 'color: cyan', ...args);
}

// Substituir console.log de API por debug() para menos poluição
```

---

## 🎯 Último Resort: Use uma API Alternativa

Se todas as soluções falharem, alternativas:

1. **RapidAPI SuperHero**: https://rapidapi.com/api-sports/api/superhero
2. **Heroku App**: Deploy gratuito para proxy
3. **Vercel Alternative**: Crie function serverless

---

## 📞 Checklist Final

Antes de reportar como "bug":

- ✅ Testou 3x a busca
- ✅ Esperou 5 segundos completos
- ✅ Recarregou página (Ctrl+F5)
- ✅ Testou em navegador diferente
- ✅ Abriu console e viu logs detalhados
- ✅ Testou URL da API diretamente no navegador
- ✅ Testou com VPN ligada/desligada
- ✅ Verificou firewall/antivírus

---

## ✅ Se Nada Funcionar

Adicione isto ao final de `index.html` antes de `</body>`:

```html
<!-- Fallback para erro de CORS -->
<script>
if (navigator.onLine === false) {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; font-family: Arial;">
            <h1>😟 Sem Conexão de Internet</h1>
            <p>Verifique sua conexão wifi/dados e recarregue a página.</p>
        </div>
    `;
}
</script>
```

---

## 💡 Pro Tips

1. **Use Chrome DevTools Network Tab** para ver exatamente qual requisição falha
2. **DevTools → Application → Cache Storage** para limpar cache forçado
3. **Ctrl+Shift+M** no Chrome/Firefox para testar modo mobile
4. **Inspect Element** na mensagem de erro para ver HTML gerado

---

**Boa sorte! 🦸‍♂️ Se persistir, entre em contato para suporte.**

*Última atualização: 4 de março de 2026*
