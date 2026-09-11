// Configurações gerais do site — edite os valores abaixo.

const CONFIG = {
  // Cole aqui as chaves do seu projeto Firebase (Configurações do projeto > Geral > Seus apps > SDK setup).
  // Essas chaves são públicas por natureza (o Firebase usa Regras de Segurança para proteger os dados,
  // não o sigilo dessas chaves), mas mesmo assim vamos restringir a escrita nas Regras do Firestore.
  firebase: {
    apiKey: "AIzaSyC9x8esfkwkV0r7FYKNO-gFSnRuVvBGDOc",
    authDomain: "cha-de-divorcio.firebaseapp.com",
    projectId: "cha-de-divorcio",
    storageBucket: "cha-de-divorcio.firebasestorage.app",
    messagingSenderId: "844048807992",
    appId: "1:844048807992:web:5ddb8b96aeb42280214ecd"
  },

  festa: {
    data: "03 de outubro",   // ex: "19 de outubro"
    horario: "17h",          // ex: "19h30"
    local: "Rua Rejane Freire Correia, 1333 - Edifício Francisco Farias, Apto 102",
    rsvp: ""                 // ex: link do whatsapp ou "confirme presença até 10/10"
  },

  endereco: {
    linha1: "Rua Rejane Freire Correia, 1333",
    linha2: "Edifício Francisco Farias, Apartamento 102",
    bairro: "Jardim Cidade Universitária",
    cep: "58052-197"
  }
};
