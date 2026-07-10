const capacitaciones = [
  {
    fecha: "Viernes 12 de junio",
    titulo: "Fundamentos de la neurodiversidad",
    tema: "Adaptaciones curriculares pedagógicas en la atención a la diversidad.",
    estado: "disponible",
    recursos: {
      flyer: "imagenes/capacitacion-01/flyer.jpg",
      infografia: "imagenes/capacitacion-01/infografia.jpg",
      diapositivas: "documentos/capacitacion-01/diapositivas.pdf",
      video: "https://drive.google.com/file/d/12sRjL1kb-4y8g3Tz8fpUpemK2Uzptkuz/preview",
      videoDrive: "https://drive.google.com/file/d/12sRjL1kb-4y8g3Tz8fpUpemK2Uzptkuz/view"
    }
  },
  {
    fecha: "Viernes 19 de junio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {
      infografia: "imagenes/capacitacion-02/Infografia.jpg",
      diapositivas: "documentos/capacitacion-02/diapositivas.pdf"
    }
  },
  {
    fecha: "Viernes 26 de junio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {
      infografia: "imagenes/capacitacion-03/Infografia.jpg",
      video: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnpJbVRMRXJab3NmUXBMbWxzRnF3aHdGU2VTbFdHZTIvcHJldmlldw=="),
      videoDrive: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnpJbVRMRXJab3NmUXBMbWxzRnF3aHdGU2VTbFdHZTIvdmlldw==")
    }
  },
  {
    fecha: "Viernes 03 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {
      infografia: "imagenes/capacitacion-04/Infografia.jpg",
      video: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdkliY2I0WGZYNmJfQW5nT1VMZzUyYlk0dGk4Q0h6V0svcHJldmlldw=="),
      videoDrive: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdkliY2I0WGZYNmJfQW5nT1VMZzUyYlk0dGk4Q0h6V0svdmlldw==")
    }
  },
  {
    fecha: "Viernes 10 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 17 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 24 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 31 de julio",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 07 de agosto",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  },
  {
    fecha: "Viernes 14 de agosto",
    titulo: "Capacitación pendiente de registrar",
    tema: "Tema: pendiente de completar.",
    estado: "pendiente",
    recursos: {}
  }
];

const lineaTiempo = document.getElementById("lineaTiempo");
const mensajeSinResultados = document.getElementById("sinResultados");

function protegerHTML(texto) {
  return String(texto)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function crearRecursoImagen(titulo, ruta, textoBoton, alt) {
  if (!ruta) {
    return crearRecursoPendiente(titulo, "Pendiente de subir", "Sin archivo");
  }

  return `
    <article class="recurso">
      <h4>${protegerHTML(titulo)}</h4>
      <a class="vista-recurso" href="${ruta}" target="_blank" rel="noopener">
        <img src="${ruta}" alt="${protegerHTML(alt)}" loading="lazy" decoding="async">
      </a>
      <a class="boton-recurso" href="${ruta}" target="_blank" rel="noopener">
        ${protegerHTML(textoBoton)}
      </a>
    </article>
  `;
}

function crearRecursoPDF(ruta) {
  if (!ruta) {
    return crearRecursoPendiente("Diapositivas PDF", "Pendiente de subir", "Sin archivo");
  }

  return `
    <article class="recurso">
      <h4>Diapositivas PDF</h4>
      <div class="vista-recurso">
        <iframe
          src="${ruta}"
          title="Vista previa de diapositivas en PDF">
        </iframe>
      </div>
      <a class="boton-recurso" href="${ruta}" target="_blank" rel="noopener">
        Abrir diapositivas
      </a>
    </article>
  `;
}

function crearRecursoVideo(video, videoDrive) {
  if (!video) {
    return crearRecursoPendiente("Video", "Pendiente de enlace", "Sin enlace");
  }

  const enlaceExterno = videoDrive || video.replace("/preview", "/view");
  const videoSeguro = protegerHTML(video);
  const enlaceSeguro = protegerHTML(enlaceExterno);

  return `
    <article class="recurso">
      <h4>Video</h4>
      <div class="vista-recurso video-recurso marcador" data-video-src="${videoSeguro}">
        <button class="boton-recurso boton-cargar-video" type="button" data-video-src="${videoSeguro}">
          Ver video
        </button>
      </div>
      <a class="boton-recurso" href="${enlaceSeguro}" target="_blank" rel="noopener">
        Abrir video en Drive
      </a>
    </article>
  `;
}

function crearRecursoPendiente(titulo, mensaje, boton) {
  return `
    <article class="recurso recurso-pendiente">
      <h4>${protegerHTML(titulo)}</h4>
      <div class="vista-recurso marcador">${protegerHTML(mensaje)}</div>
      <span class="boton-recurso deshabilitado">${protegerHTML(boton)}</span>
    </article>
  `;
}

function crearTarjeta(capacitacion) {
  const recursos = capacitacion.recursos || {};

  return `
    <article class="capacitacion ${capacitacion.estado === "disponible" ? "disponible" : "pendiente"}">
      <div class="punto-linea" aria-hidden="true"></div>

      <div class="tarjeta-capacitacion">
        <header class="cabecera-capacitacion">
          <p class="fecha">${protegerHTML(capacitacion.fecha)}</p>
          <h3>${protegerHTML(capacitacion.titulo)}</h3>
          <p class="tema">${protegerHTML(capacitacion.tema)}</p>
        </header>

        <div class="recursos" id="materiales">
          ${crearRecursoImagen(
            "Flyer",
            recursos.flyer,
            "Abrir flyer",
            `Flyer de la capacitación ${capacitacion.titulo}`
          )}

          ${crearRecursoImagen(
            "Infografía",
            recursos.infografia,
            "Abrir infografía",
            `Infografía de la capacitación ${capacitacion.titulo}`
          )}

          ${crearRecursoPDF(recursos.diapositivas)}

          ${crearRecursoVideo(recursos.video, recursos.videoDrive)}
        </div>
      </div>
    </article>
  `;
}

function renderizarCapacitaciones(lista) {
  if (!lineaTiempo) return;

  lineaTiempo.innerHTML = lista.map(crearTarjeta).join("");

  if (mensajeSinResultados) {
    mensajeSinResultados.hidden = lista.length > 0;
  }
}

function cargarVideoDrive(boton) {
  const contenedor = boton.closest(".video-recurso");
  const video = boton.dataset.videoSrc;

  if (!contenedor || !video) return;

  contenedor.classList.remove("marcador");
  contenedor.innerHTML = `
    <iframe
      src="${video}"
      title="Video de la capacitación"
      allow="autoplay"
      allowfullscreen>
    </iframe>
  `;
}

document.addEventListener("click", (evento) => {
  const botonVideo = evento.target.closest(".boton-cargar-video");
  if (!botonVideo) return;
  cargarVideoDrive(botonVideo);
});

renderizarCapacitaciones(capacitaciones);