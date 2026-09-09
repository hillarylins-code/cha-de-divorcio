# Chá de Divórcio — site de presentes

## O que falta para funcionar 100%

### 1. Criar o Firebase (garante que só uma pessoa reserve cada item)

1. Acesse https://console.firebase.google.com e crie um projeto novo (gratuito, sem cartão).
2. No menu lateral, vá em **Build > Firestore Database** > "Criar banco de dados" > modo **produção** > escolha uma região (ex: `southamerica-east1`).
3. Em **Regras**, cole isto e publique (permite todo mundo ler, mas só criar reserva se o item ainda não estiver reservado — ninguém pode "desreservar" ou editar um item já reservado):

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /itens/{itemId} {
         allow read: if true;
         allow create: if request.resource.data.reservado == true;
         allow update: if resource.data.reservado == false && request.resource.data.reservado == true;
         allow delete: if false;
       }
     }
   }
   ```

4. Volte em **Configurações do projeto (⚙️) > Geral**, role até "Seus apps", clique no ícone `</>` (Web) para registrar um app.
5. Copie o objeto `firebaseConfig` gerado e cole em [`js/config.js`](js/config.js), dentro de `CONFIG.firebase`.

### 2. Preencher os itens que faltam

Abra [`js/data.js`](js/data.js). Os itens da Shopee vieram como **"Item a definir"** porque a Shopee bloqueia a extração automática de nome/preço/imagem. Me envie (ou preencha você mesma) para cada um:
- `nome`: nome curto do produto
- `preco`: ex. `"R$ 89,90"`
- `imagem`: link direto de uma imagem (pode ser um print hospedado, ou a imagem do produto)
- `variacao`: se o produto tiver cor/tamanho, escreva aqui (ex: `"Cor: verde musgo"`)

### 3. Preencher os dados da festa

Em [`js/config.js`](js/config.js), edite `CONFIG.festa` com data, horário e (se quiser) um link de confirmação de presença.

### 4. Publicar no GitHub Pages

```bash
cd cha-de-divorcio
git init
git add .
git commit -m "primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/cha-de-divorcio.git
git push -u origin main
```

Depois, no GitHub: **Settings > Pages > Source: branch `main` / pasta `/ (root)`**. Em alguns minutos o site fica no ar em `https://SEU_USUARIO.github.io/cha-de-divorcio/`.

Toda vez que eu adicionar mais links, é só repetir `git add . && git commit -m "..." && git push`.
