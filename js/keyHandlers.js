const input = document.getElementById("input"); // Importando o input que exibe as contas
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]; // Teclas que podem ser digitadas pelo usuário
import calcular from "./calcular.js";

// Fução de limpar a calculadora
export function clearBtn() {
  input.value = "";
  input.focus();
}

// Função de identificar os clicks dos botões com as operações/números da calculadora
export function handlerkeyBtn(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

// Função de identifcar a digitação do usuário com todas as operações e números
export function handleTiping(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calcular();
  }
}
