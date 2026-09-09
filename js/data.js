// Lista de itens da lista de presentes.
// Preencha "nome" e "preco" com o que você souber — os que estiverem como
// "Item a definir" vieram de links da Shopee, que bloqueia a extração automática.
// Se o item tiver variação (cor, tamanho, modelo), preencha o campo "variacao".
// "id" precisa ser único e não deve mudar depois de publicado (é a chave usada no Firebase).

const ITENS = [
  { id: "shopee-03", nome: "Adega Dourada", preco: "R$ 49,90", loja: "Shopee", link: "https://br.shp.ee/bk1bk4VQ", imagem: "", variacao: "" },
  { id: "shopee-04", nome: "Bandeja Giratória de Bambu", preco: "R$ 68,99", loja: "Shopee", link: "https://br.shp.ee/g1N78FZ1", imagem: "", variacao: "" },
  { id: "shopee-05", nome: "Espelho Orgânico 70x50 LED Quente", preco: "R$ 104,50", loja: "Shopee", link: "https://br.shp.ee/cAuuWXhS", imagem: "", variacao: "" },
  { id: "shopee-06", nome: "Kit 4 Panos de Prato", preco: "R$ 43,90", loja: "Shopee", link: "https://br.shp.ee/SkzYcL5V", imagem: "", variacao: "" },
  { id: "shopee-07", nome: "Fruteira de Mesa Aramada Metal Dourado", preco: "R$ 52,49", loja: "Shopee", link: "https://br.shp.ee/85hx7J3z", imagem: "", variacao: "" },
  { id: "shopee-08", nome: "Kit 02 Prendedores Abraçadeira de Cortina", preco: "R$ 27,40", loja: "Shopee", link: "https://br.shp.ee/q79xvVki", imagem: "", variacao: "Caramelo" },
  { id: "shopee-09", nome: "Cortina Luxo Voil com Forro", preco: "R$ 77,50", loja: "Shopee", link: "https://br.shp.ee/4gdXj8Zr", imagem: "", variacao: "Rosa liso, tamanho 3x2,60" },
  { id: "shopee-10", nome: "Kit Colcha Cobre-Leito 300 Fios Grid 3 Peças", preco: "R$ 88,95", loja: "Shopee", link: "https://br.shp.ee/yWQLa9qL", imagem: "", variacao: "Grafite, casal" },
  { id: "shopee-11", nome: "Tapete Capacho Personalizado 60x40", preco: "R$ 78,99", loja: "Shopee", link: "https://br.shp.ee/VFTWfnmi", imagem: "", variacao: "" },
  { id: "shopee-12", nome: "Travesseiro de Corpo Xuxão", preco: "R$ 79,90", loja: "Shopee", link: "https://br.shp.ee/4yt5Hap2", imagem: "", variacao: "Travesseiro + fronha preta" },
  { id: "shopee-13", nome: "Garrafa de Vidro Sleek com Tampa", preco: "R$ 38,90", loja: "Shopee", link: "https://br.shp.ee/uTSFNHu6", imagem: "", variacao: "2 unidades" },
  { id: "shopee-14", nome: "Kit Abridor Saca-Rolhas", preco: "R$ 50,83", loja: "Shopee", link: "https://br.shp.ee/RXo61iLB", imagem: "", variacao: "" },
  { id: "shopee-15", nome: "Jogo 12 Taças Vinho Vidro Cristal 510ml", preco: "R$ 85,50", loja: "Shopee", link: "https://br.shp.ee/wsQRpWzt", imagem: "", variacao: "" },
  { id: "shopee-16", nome: "Jogo de Petisqueira 3 Bowls com Bandeja", preco: "R$ 79,90", loja: "Shopee", link: "https://br.shp.ee/ytXBKGao", imagem: "", variacao: "" },
  { id: "amazon-01", nome: "LUMAI Kit Tábua de Frios Bambu Premium e Petisqueira com Suporte Magnético", preco: "R$ 129,19", loja: "Amazon", link: "https://a.co/d/05jw3H1e", imagem: "", variacao: "" },
  { id: "amazon-02", nome: "Oxford Aparelho de Jantar 20 Peças - Flat Chuvisco", preco: "R$ 351,59", loja: "Amazon", link: "https://a.co/d/08mohqOe", imagem: "", variacao: "" },
  { id: "amazon-03", nome: "Jogo com 6 Taças para Vinho Tinto em Cristal Ecológico Premium", preco: "R$ 104,49", loja: "Amazon", link: "https://a.co/d/04hLoMoB", imagem: "", variacao: "" },
  { id: "shein-01", nome: "Tapete de Banheiro com Gato Sentado no Vaso Lendo Livro", preco: "R$ 39,06", loja: "Shein", link: "https://onelink.shein.com/51/61g2vspbl5xo?shc=2_R85HI1mCple", imagem: "", variacao: "Multicolorido, tamanho 40x60 (kit com 3)" },
  { id: "shein-02", nome: "Caminho de Mesa de Linho Estampa Leopardo Rosa", preco: "R$ 39,33", loja: "Shein", link: "https://onelink.shein.com/51/61g2tvn8n8r4?shc=2_R85HQaL2uVw", imagem: "", variacao: "33cm x 200cm" },
  { id: "shein-03", nome: "4 Capas de Almofada Estampa de Cachorro Xadrez Rosa", preco: "R$ 55,79", loja: "Shein", link: "https://onelink.shein.com/51/61g2skahx84h?shc=2_R85HjV8YBfA", imagem: "", variacao: "Modelo de cores 3" },
  { id: "shein-04", nome: "Suporte de Vela Alto de Vidro Verde Escuro Estilo Vintage Francês", preco: "R$ 98,52", loja: "Shein", link: "https://onelink.shein.com/51/61g2rso2cggw?shc=2_R85HEGcGN6L", imagem: "", variacao: "Castiçal tipo B, 3 peças" },
  { id: "shein-04b", nome: "Suporte de Vela Alto de Vidro Verde Escuro Estilo Vintage Francês", preco: "R$ 36,51", loja: "Shein", link: "https://onelink.shein.com/51/61g2rso2cggw?shc=2_R85HEGcGN6L", imagem: "", variacao: "Uma caixa de cera" }
];
