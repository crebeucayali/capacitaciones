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

function mostrarAvisoDrive(boton, tipo, continuar) {
  const contenedor = boton.closest(".vista-recurso");
  if (!contenedor || contenedor.querySelector(".aviso-drive-previo")) return;

  const aviso = document.createElement("div");
  aviso.className = "aviso-drive-previo";
  aviso.setAttribute("role", "note");

  const texto = document.createElement("p");
  texto.innerHTML = `Al cargar ${tipo}, se establecerá una conexión con <strong>Google Drive</strong>, que puede procesar datos técnicos de la conexión conforme a sus propias políticas.`;

  const acciones = document.createElement("div");
  acciones.className = "acciones-aviso-drive";

  const cargar = document.createElement("button");
  cargar.type = "button";
  cargar.className = "boton-recurso boton-confirmar-drive";
  cargar.textContent = tipo === "el video" ? "Cargar video" : "Cargar vista previa";

  const cancelar = document.createElement("button");
  cancelar.type = "button";
  cancelar.className = "boton-recurso boton-cancelar-drive";
  cancelar.textContent = "Cancelar";

  cargar.addEventListener("click", continuar, { once: true });
  cancelar.addEventListener("click", () => {
    aviso.remove();
    boton.hidden = false;
    boton.focus();
  });

  acciones.append(cargar, cancelar);
  aviso.append(texto, acciones);
  boton.hidden = true;
  contenedor.appendChild(aviso);
  cargar.focus();
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
    mostrarAvisoDrive(botonDiapositivas, "la vista previa", () => {
      cargarVistaDrive(
        botonDiapositivas,
        ".pdf-recurso",
        "Vista previa de las diapositivas de la sesión",
        "fullscreen"
      );
    });
    return;
  }

  const botonVideo = evento.target.closest(".boton-cargar-video");
  if (botonVideo) {
    mostrarAvisoDrive(botonVideo, "el video", () => {
      cargarVistaDrive(
        botonVideo,
        ".video-recurso",
        "Vista previa del video de la sesión",
        "autoplay; fullscreen"
      );
    });
  }
});
