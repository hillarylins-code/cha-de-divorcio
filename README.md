# Chá de Divórcio — site de presentes

Site no ar: https://hillarylins-code.github.io/cha-de-divorcio/
Repositório: https://github.com/hillarylins-code/cha-de-divorcio

## Status atual

- ✅ Firebase configurado (`js/config.js`) e regras do Firestore publicadas — reserva de item é atômica, ninguém consegue reservar o mesmo item duas vezes.
- ✅ Convite preenchido (`js/config.js` → `CONFIG.festa`): 03 de outubro às 17h, endereço da festa.
- ✅ Endereço para entrega direta preenchido (`js/config.js` → `CONFIG.endereco`).
- ✅ Publicado no GitHub Pages.
- ✅ Itens da lista (`js/data.js`) preenchidos com nome, preço e variação (quando tem).

## Pendente

1. **Fotos dos itens** — nenhum item tem `imagem` ainda (todos mostram o placeholder 🎁). A dona do site vai salvar os prints/fotos de cada produto e enviar para adicionar em `js/data.js` (campo `imagem`).
2. **Ajustes de fonte e texto** — combinado que ainda vamos revisar/alterar a tipografia (hoje: "Dancing Script" nos títulos + "Quicksand" no corpo, ver `css/style.css`) e alguns textos do site. Ainda não especificado o que muda.
3. **RSVP** — `CONFIG.festa.rsvp` está vazio; opcional, preencher se quiser um link/texto de confirmação de presença.

## Como publicar novas alterações

```bash
cd cha-de-divorcio
git add .
git commit -m "descrição da mudança"
git push
```

O GitHub Pages atualiza automaticamente em alguns minutos após o push.
