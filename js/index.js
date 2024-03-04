import calcular from "./calcular.js";
import copyToClipboard from "./copyToClipboard.js";
import themeSwitcher from "./themeSwitcher.js";
import { clearBtn, handlerkeyBtn, handleTiping } from "./keyHandlers.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handlerkeyBtn);
});

document.getElementById("clear").addEventListener("click", clearBtn);

input.addEventListener("keydown", handleTiping);

document.getElementById("equal").addEventListener("click", calcular);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);
