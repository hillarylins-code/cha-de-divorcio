import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  doc,
  onSnapshot,
  runTransaction,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

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
          : "🎁"
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
  document.getElementById("convite-data").textContent = CONFIG.festa.data;
  document.getElementById("convite-horario").textContent = CONFIG.festa.horario;
  document.getElementById("convite-local").textContent = CONFIG.festa.local;
  const rsvpEl = document.getElementById("convite-rsvp");
  if (CONFIG.festa.rsvp) {
    rsvpEl.textContent = CONFIG.festa.rsvp;
    rsvpEl.style.display = "block";
  }
}

function preencherEndereco() {
  document.getElementById("endereco-linha1").textContent = CONFIG.endereco.linha1;
  document.getElementById("endereco-linha2").textContent = CONFIG.endereco.linha2;
  document.getElementById("endereco-cep").textContent = "CEP " + CONFIG.endereco.cep;
}

renderItens();
preencherConvite();
preencherEndereco();
escutarMudancas();
