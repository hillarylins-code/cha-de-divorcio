import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  doc,
  onSnapshot,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const GIFT_SVG = `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="18" y="42" width="46" height="40" rx="3"/>
  <rect x="14" y="30" width="54" height="14" rx="2"/>
  <path d="M41 30v52"/>
  <path d="M41 30c-4-10-16-14-20-8s6 8 20 8z"/>
  <path d="M41 30c4-10 16-14 20-8s-6 8-20 8z"/>
</svg>`;

const app = initializeApp(CONFIG.firebase);
const db = getFirestore(app);

const grid = document.getElementById("itens-grid");
const modalOverlay = document.getElementById("modal-overlay");
const modalNomeInput = document.getElementById("modal-nome");
const modalConfirmar = document.getElementById("modal-confirmar");
const modalCancelar = document.getElementById("modal-cancelar");

let itemEmReserva = null;
const estadoLocal = {}; // cache do status de cada item vindo do Firestore

function renderItens() {
  grid.innerHTML = "";
  ITENS.forEach((item) => {
    const estado = estadoLocal[item.id];
    const reservado = estado?.reservado === true;

    const card = document.createElement("div");
    card.className = "item-card" + (reservado ? " reservado" : "");
    card.id = `card-${item.id}`;

    card.innerHTML = `
      <div class="item-imagem">${
        item.imagem
          ? `<img src="${item.imagem}" alt="${item.nome}">`
          : GIFT_SVG
      }</div>
      <div class="item-body">
        <span class="item-loja">${item.loja}</span>
        <span class="item-nome">${item.nome}</span>
        ${item.variacao ? `<span class="item-variacao">${item.variacao}</span>` : ""}
        ${item.preco ? `<span class="item-preco">${item.preco}</span>` : ""}
        <span class="item-status">${
          reservado
            ? `Já foi escolhido com carinho 💚${estado?.nome ? " por " + escapeHtml(estado.nome) : ""}`
            : "Disponível"
        }</span>
        <div class="item-actions">
          <a class="btn btn-comprar" href="${item.link}" target="_blank" rel="noopener noreferrer">Ver / Comprar</a>
          <button class="btn btn-reservar" data-id="${item.id}" ${reservado ? "disabled" : ""}>
            ${reservado ? "Já reservado" : "Vou presentear com este"}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll(".btn-reservar").forEach((btn) => {
    btn.addEventListener("click", () => abrirModal(btn.dataset.id));
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function abrirModal(itemId) {
  itemEmReserva = itemId;
  modalNomeInput.value = "";
  modalOverlay.classList.add("aberto");
  modalNomeInput.focus();
}

function fecharModal() {
  modalOverlay.classList.remove("aberto");
  itemEmReserva = null;
}

modalCancelar.addEventListener("click", fecharModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) fecharModal();
});

modalConfirmar.addEventListener("click", async () => {
  if (!itemEmReserva) return;
  const nome = modalNomeInput.value.trim();
  const id = itemEmReserva;
  modalConfirmar.disabled = true;

  try {
    const itemRef = doc(db, "itens", id);
    await runTransaction(db, async (transaction) => {
      const snap = await transaction.get(itemRef);
      if (snap.exists() && snap.data().reservado === true) {
        throw new Error("JA_RESERVADO");
      }
      transaction.set(itemRef, {
        reservado: true,
        nome: nome || null,
        reservadoEm: serverTimestamp()
      });
    });
    fecharModal();
  } catch (err) {
    if (err.message === "JA_RESERVADO") {
      alert("Ops! Alguém acabou de reservar este item agora há pouco. Escolha outro 💚");
    } else {
      console.error(err);
      alert("Não foi possível reservar agora. Tente novamente em instantes.");
    }
  } finally {
    modalConfirmar.disabled = false;
  }
});

function escutarMudancas() {
  ITENS.forEach((item) => {
    const itemRef = doc(db, "itens", item.id);
    onSnapshot(itemRef, (snap) => {
      estadoLocal[item.id] = snap.exists() ? snap.data() : { reservado: false };
      renderItens();
    });
  });
}

function preencherConvite() {
  document.getElementById("convite-data-horario").textContent =
    `${CONFIG.festa.data} às ${CONFIG.festa.horario}`;
}

function preencherEndereco() {
  document.getElementById("endereco-linha1").textContent = CONFIG.endereco.linha1;
  document.getElementById("endereco-linha2").textContent = CONFIG.endereco.linha2;
  document.getElementById("endereco-bairro").textContent = CONFIG.endereco.bairro;
  document.getElementById("endereco-cep").textContent = "CEP " + CONFIG.endereco.cep;
}

renderItens();
preencherConvite();
preencherEndereco();
escutarMudancas();
