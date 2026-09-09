// Lista de itens da lista de presentes.
// Preencha "nome" e "preco" com o que você souber — os que estiverem como
// "Item a definir" vieram de links da Shopee, que bloqueia a extração automática.
// Se o item tiver variação (cor, tamanho, modelo), preencha o campo "variacao".
// "id" precisa ser único e não deve mudar depois de publicado (é a chave usada no Firebase).

const ITENS = [
  { id: "shopee-01", nome: "Aparador Buffet Cantinho do Café - Mesa Industrial 2 Prateleiras", preco: "", loja: "Shopee", link: "https://s.shopee.com.br/6L2BMdUHtq", imagem: "", variacao: "" },
  { id: "shopee-02", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://s.shopee.com.br/20vIIh8j0Y", imagem: "", variacao: "" },
  { id: "shopee-03", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/bk1bk4VQ", imagem: "", variacao: "" },
  { id: "shopee-04", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/g1N78FZ1", imagem: "", variacao: "" },
  { id: "shopee-05", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/cAuuWXhS", imagem: "", variacao: "" },
  { id: "shopee-06", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/SkzYcL5V", imagem: "", variacao: "" },
  { id: "shopee-07", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/85hx7J3z", imagem: "", variacao: "" },
  { id: "shopee-08", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/q79xvVki", imagem: "", variacao: "" },
  { id: "shopee-09", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/4gdXj8Zr", imagem: "", variacao: "" },
  { id: "shopee-10", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/yWQLa9qL", imagem: "", variacao: "" },
  { id: "shopee-11", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/VFTWfnmi", imagem: "", variacao: "" },
  { id: "shopee-12", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/4yt5Hap2", imagem: "", variacao: "" },
  { id: "amazon-01", nome: "LUMAI Kit Tábua de Frios Bambu Premium e Petisqueira com Suporte Magnético", preco: "", loja: "Amazon", link: "https://a.co/d/05jw3H1e", imagem: "", variacao: "" },
  { id: "amazon-02", nome: "Oxford Aparelho de Jantar 20 Peças - Flat Chuvisco", preco: "", loja: "Amazon", link: "https://a.co/d/08mohqOe", imagem: "", variacao: "" },
  { id: "amazon-03", nome: "Jogo com 6 Taças para Vinho Tinto em Cristal Ecológico Premium", preco: "", loja: "Amazon", link: "https://a.co/d/04hLoMoB", imagem: "", variacao: "" },
  { id: "shopee-13", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/uTSFNHu6", imagem: "", variacao: "" },
  { id: "shopee-14", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/RXo61iLB", imagem: "", variacao: "" },
  { id: "shopee-15", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/wsQRpWzt", imagem: "", variacao: "" },
  { id: "shopee-16", nome: "Item a definir", preco: "", loja: "Shopee", link: "https://br.shp.ee/ytXBKGao", imagem: "", variacao: "" },
  { id: "shein-01", nome: "Tapete de Banheiro com Gato Sentado no Vaso Lendo Livro", preco: "", loja: "Shein", link: "https://onelink.shein.com/51/61g2vspbl5xo?shc=2_R85HI1mCple", imagem: "", variacao: "" },
  { id: "shein-02", nome: "Caminho de Mesa de Linho Estampa Leopardo Rosa", preco: "", loja: "Shein", link: "https://onelink.shein.com/51/61g2tvn8n8r4?shc=2_R85HQaL2uVw", imagem: "", variacao: "" },
  { id: "shein-03", nome: "4 Capas de Almofada Estampa de Cachorro Xadrez Rosa", preco: "", loja: "Shein", link: "https://onelink.shein.com/51/61g2skahx84h?shc=2_R85HjV8YBfA", imagem: "", variacao: "" },
  { id: "shein-04", nome: "Suporte de Vela Alto de Vidro Verde Escuro Estilo Vintage Francês", preco: "", loja: "Shein", link: "https://onelink.shein.com/51/61g2rso2cggw?shc=2_R85HEGcGN6L", imagem: "", variacao: "" }
];
