const capacitaciones = [
  {
    fecha: "Viernes 12 de junio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Fundamentos de la neurodiversidad",
    estado: "disponible",
    recursos: {
      flyer: "imagenes/capacitacion-01/flyer.jpg",
      infografia: "imagenes/capacitacion-01/infografia.jpg",
      pdfDrive: "https://drive.google.com/file/d/1HNFoHBVokwRZFunaKFUv506sZ39fOjX_/view?usp=drive_link",
      video: "https://drive.google.com/file/d/12sRjL1kb-4y8g3Tz8fpUpemK2Uzptkuz/preview",
      videoDrive: "https://drive.google.com/file/d/12sRjL1kb-4y8g3Tz8fpUpemK2Uzptkuz/view"
    }
  },
  {
    fecha: "Viernes 19 de junio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Neurociencia y factores emocionales en el aprendizaje",
    estado: "disponible",
    recursos: {
      flyer: "",
      infografia: "imagenes/capacitacion-02/Infografia.jpg",
      pdfDrive: "https://drive.google.com/file/d/14ECDjqx7w25FTpz62BgIyrJoU7XtVDVS/view?usp=drive_link",
      video: "https://drive.google.com/file/d/1MSyDiHF1ffNNPFpiXs9diLafmHT9ms8I/preview",
      videoDrive: "https://drive.google.com/file/d/1MSyDiHF1ffNNPFpiXs9diLafmHT9ms8I/view"
    }
  },
  {
    fecha: "Viernes 26 de junio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Aprendizaje contextualizado e inclusivo",
    estado: "disponible",
    recursos: {
      flyer: "",
      infografia: "imagenes/capacitacion-03/Infografia.jpg",
      pdfDrive: "https://drive.google.com/file/d/1ANmSOYaQrZZq1h3E2M8rSfdJ69-077Si/view?usp=drive_link",
      video: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnpJbVRMRXJab3NmUXBMbWxzRnF3aHdGU2VTbFdHZTIvcHJldmlldw=="),
      videoDrive: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZnpJbVRMRXJab3NmUXBMbWxzRnF3aHdGU2VTbFdHZTIvdmlldw==")
    }
  },
  {
    fecha: "Viernes 03 de julio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Estrategias y adaptaciones inclusivas",
    estado: "disponible",
    recursos: {
      flyer: "",
      infografia: "imagenes/capacitacion-04/Infografia.jpg",
      pdfDrive: "https://drive.google.com/file/d/1NwsWS2qGqmVcDB95OfeL0KxmRtjlj84S/view?usp=drive_link",
      video: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdkliY2I0WGZYNmJfQW5nT1VMZzUyYlk0dGk4Q0h6V0svcHJldmlldw=="),
      videoDrive: atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdkliY2I0WGZYNmJfQW5nT1VMZzUyYlk0dGk4Q0h6V0svdmlldw==")
    }
  },
  {
    fecha: "Viernes 10 de julio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Implementación de buenas prácticas",
    estado: "disponible",
    recursos: {
      flyer: "",
      infografia: "",
      pdfDrive: "https://drive.google.com/file/d/1N2iQBMexK3Q1y425gi_JzWNNLq4GEvaj/view?usp=drive_link",
      video: "https://drive.google.com/file/d/1sfatW2Ox0Ox5Ai621aHE0fSQmIpCayXd/preview",
      videoDrive: "https://drive.google.com/file/d/1sfatW2Ox0Ox5Ai621aHE0fSQmIpCayXd/view"
    }
  },
  {
    fecha: "Viernes 17 de julio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Fundamentos del Diseño Universal para el Aprendizaje (DUA)",
    estado: "disponible",
    recursos: { flyer: "", infografia: "imagenes/capacitacion-06/infografia.jpeg", pdfDrive: "", video: "", videoDrive: "" }
  },
  {
    fecha: "Viernes 24 de julio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Principio I: Múltiples formas de implicación",
    estado: "pendiente",
    recursos: { flyer: "", infografia: "imagenes/capacitacion-07/infografia.jpeg", pdfDrive: "", video: "", videoDrive: "" }
  },
  {
    fecha: "Viernes 31 de julio",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Principio II: Múltiples formas de representación",
    estado: "disponible",
    recursos: { flyer: "", infografia: "imagenes/capacitacion-08/infografia.jpeg", pdfDrive: "", video: "", videoDrive: "" }
  },
  {
    fecha: "Viernes 07 de agosto",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Principio III: Múltiples formas de acción y expresión",
    estado: "disponible",
    recursos: { flyer: "", infografia: "imagenes/capacitacion-09/infografia.jpeg", pdfDrive: "", video: "", videoDrive: "" }
  },
  {
    fecha: "Viernes 14 de agosto",
    titulo: "Adaptaciones curriculares pedagógicas en la atención a la diversidad",
    tema: "Tema: Aplicación práctica del DUA en la planificación docente",
    estado: "disponible",
    recursos: { flyer: "", infografia: "imagenes/capacitacion-10/infografia.jpeg", pdfDrive: "", video: "", videoDrive: "" }
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

  const rutaSegura = protegerHTML(ruta);
  return `
    <article class="recurso">
      <h4>${protegerHTML(titulo)}</h4>
      <a class="vista-recurso" href="${rutaSegura}" target="_blank" rel="noopener noreferrer">
        <img src="${rutaSegura}" alt="${protegerHTML(alt)}" loading="lazy" decoding="async">
      </a>
      <a class="boton-recurso" href="${rutaSegura}" target="_blank" rel="noopener noreferrer">
        ${protegerHTML(textoBoton)}
      </a>
    </article>
  `;
}

function crearRecursoPDF(rutaDrive) {
  if (!rutaDrive) {
    return crearRecursoPendiente("PDF", "Pendiente de enlazar desde Google Drive", "Sin enlace");
  }

  const enlaceExterno = rutaDrive.replace(/\/preview(?:\?.*)?$/, "/view");
  const enlaceVistaPrevia = rutaDrive.replace(/\/view(?:\?.*)?$/, "/preview");
  const enlaceSeguro = protegerHTML(enlaceExterno);
  const vistaPreviaSegura = protegerHTML(enlaceVistaPrevia);

  return `
    <article class="recurso">
      <h4>PDF</h4>
      <div class="vista-recurso pdf-recurso marcador" data-pdf-src="${vistaPreviaSegura}">
        <button class="boton-recurso boton-cargar-pdf" type="button" data-pdf-src="${vistaPreviaSegura}">
          Ver vista previa
        </button>
      </div>
      <a class="boton-recurso" href="${enlaceSeguro}" target="_blank" rel="noopener noreferrer">
        Abrir PDF en Drive
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
      <a class="boton-recurso" href="${enlaceSeguro}" target="_blank" rel="noopener noreferrer">
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

function crearTarjeta(capacitacion, indice) {
  const recursos = capacitacion.recursos || {};
  const modulo = indice < 5 ? "Módulo 1: Neurodiversidad" : "Módulo 2: Diseño Universal para el Aprendizaje (DUA)";
  const cuadroFlyer = indice === 0
    ? crearRecursoImagen(
        "Flyer",
        recursos.flyer,
        "Abrir flyer",
        `Flyer de la capacitación ${capacitacion.titulo}`
      )
    : "";

  return `
    <article class="capacitacion ${capacitacion.estado === "disponible" ? "disponible" : "pendiente"}">
      <div class="punto-linea" aria-hidden="true"></div>

      <div class="tarjeta-capacitacion">
        <header class="cabecera-capacitacion">
          <p class="seccion-etiqueta">${modulo}</p>
          <p class="fecha">${protegerHTML(capacitacion.fecha)}</p>
          <h3>${protegerHTML(capacitacion.titulo)}</h3>
          <p class="tema">${protegerHTML(capacitacion.tema)}</p>
        </header>

        <div class="recursos" id="materiales">
          ${cuadroFlyer}

          ${crearRecursoImagen(
            "Infografía",
            recursos.infografia,
            "Abrir infografía",
            `Infografía de la capacitación ${capacitacion.titulo}`
          )}

          ${crearRecursoPDF(recursos.pdfDrive)}

          ${crearRecursoVideo(recursos.video, recursos.videoDrive)}
        </div>
      </div>
    </article>
  `;
}

function renderizarCapacitaciones(lista) {
  if (!lineaTiempo) return;

  lineaTiempo.innerHTML = lista
    .map((capacitacion, indice) => crearTarjeta(capacitacion, indice))
    .join("");

  if (mensajeSinResultados) {
    mensajeSinResultados.hidden = lista.length > 0;
  }
}

function cargarPDFDrive(boton) {
  const contenedor = boton.closest(".pdf-recurso");
  const pdf = boton.dataset.pdfSrc;

  if (!contenedor || !pdf) return;

  contenedor.classList.remove("marcador");
  contenedor.innerHTML = `
    <iframe
      src="${pdf}"
      title="Vista previa de las diapositivas en PDF"
      loading="lazy"
      allow="autoplay">
    </iframe>
  `;
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
  const botonPDF = evento.target.closest(".boton-cargar-pdf");
  if (botonPDF) {
    cargarPDFDrive(botonPDF);
    return;
  }

  const botonVideo = evento.target.closest(".boton-cargar-video");
  if (botonVideo) {
    cargarVideoDrive(botonVideo);
  }
});

renderizarCapacitaciones(capacitaciones);
