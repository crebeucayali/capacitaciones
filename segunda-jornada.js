"use strict";

function validarVistaDrive(valor) {
  const texto = String(valor || "").trim();
  if (!texto) return null;

  try {
    const url = new URL(texto);
    const rutaValida = /^\/file\/d\/[A-Za-z0-9_-]+\/preview\/?$/.test(url.pathname);

    if (
      url.protocol !== "https:" ||
      url.hostname.toLowerCase() !== "drive.google.com" ||
      !rutaValida
    ) {
      return null;
    }

    return url.href;
  } catch (error) {
    return null;
  }
}

function cargarVistaDrive(boton, selectorContenedor, titulo, permisos) {
  const contenedor = boton.closest(selectorContenedor);
  const url = validarVistaDrive(
    boton.dataset.slideSrc || boton.dataset.videoSrc
  );

  if (!contenedor || !url) return;

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.title = titulo;
  iframe.loading = "lazy";
  iframe.allow = permisos;
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  contenedor.classList.remove("marcador");
  contenedor.replaceChildren(iframe);
}

document.addEventListener("click", (evento) => {
  const botonDiapositivas = evento.target.closest(".boton-cargar-diapositivas");
  if (botonDiapositivas) {
    cargarVistaDrive(
      botonDiapositivas,
      ".pdf-recurso",
      "Vista previa de las diapositivas de la sesión",
      "fullscreen"
    );
    return;
  }

  const botonVideo = evento.target.closest(".boton-cargar-video");
  if (botonVideo) {
    cargarVistaDrive(
      botonVideo,
      ".video-recurso",
      "Vista previa del video de la sesión",
      "autoplay; fullscreen"
    );
  }
});
