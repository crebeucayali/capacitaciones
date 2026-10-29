"use strict";
(() => {
  const linea = document.getElementById("lineaTiempo");
  if (!linea) return;
  let desplazamientoPendiente = location.hash;
  const etiqueta = (numero) => "semana-" + String(numero).padStart(2, "0");
  function actualizar() {
    const articulos = [...linea.querySelectorAll(":scope > article.capacitacion")];
    articulos.forEach((articulo, indice) => {
      const numero = document.documentElement.dataset.jornada === "segunda"
        ? Number(articulo.querySelector('[id^="sesion-"]')?.id.match(/^sesion-(\d+)-titulo$/)?.[1]) || indice + 1
        : indice + 1;
      const id = etiqueta(numero);
      if (articulo.id !== id) articulo.id = id;
      const cabecera = articulo.querySelector(".cabecera-capacitacion");
      if (cabecera && !cabecera.querySelector(".compartir-semana")) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "compartir-semana";
        boton.textContent = "Copiar enlace de esta semana";
        boton.setAttribute("aria-label", "Copiar enlace directo a la semana " + numero);
        boton.addEventListener("click", async () => {
          const enlace = location.origin + location.pathname + "#" + id;
          try {
            await navigator.clipboard.writeText(enlace);
            boton.textContent = "Enlace copiado";
          } catch {
            const campo = document.createElement("input");
            campo.value = enlace;
            campo.readOnly = true;
            cabecera.appendChild(campo);
            campo.select();
            boton.textContent = "Copie el enlace seleccionado";
            campo.addEventListener("blur", () => campo.remove(), {once:true});
          }
        });
        cabecera.appendChild(boton);
      }
    });
    if (desplazamientoPendiente) {
      const destino = document.getElementById(decodeURIComponent(desplazamientoPendiente.slice(1)));
      if (destino && !destino.hidden) {
        desplazamientoPendiente = "";
        requestAnimationFrame(() => destino.scrollIntoView({block:"start",behavior:"instant"}));
      }
    }
  }
  const observador = new MutationObserver(() => actualizar());
  observador.observe(linea, {childList:true,subtree:true,attributes:true,attributeFilter:["hidden"]});
  window.addEventListener("hashchange", () => {desplazamientoPendiente=location.hash; actualizar();});
  actualizar();
  window.addEventListener("load", actualizar);
})();
