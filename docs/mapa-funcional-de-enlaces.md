# Mapa funcional de enlaces de CAP

Este documento describe la función del enlace raíz, recursos, tarjetas y rutas principales del módulo **Capacitaciones Accesibles - CAP**, parte del **Ecosistema Virtual Accesible (EVA)**.

## Enlace raíz

La página `index.html` funciona como entrada principal del módulo CAP. Desde esta página se presenta la línea de tiempo de capacitaciones y los recursos disponibles por jornada.

## Navegación principal

La cabecera permite volver al inicio del módulo y acceder a otros espacios enlazados del proyecto digital cuando corresponda.

## Línea de tiempo

La línea de tiempo organiza las capacitaciones por fecha. Cada elemento representa una jornada formativa con título, tema, estado y recursos asociados.

## Tarjetas de capacitación

Cada tarjeta puede mostrar:

- Fecha.
- Título.
- Tema.
- Estado de disponibilidad.
- Recursos asociados.

## Recursos por jornada

Los recursos pueden incluir:

- Flyer.
- Infografía.
- Diapositivas PDF.
- Video o enlace externo.

## Recursos pendientes

Cuando un recurso no está cargado, la tarjeta muestra un estado pendiente. Esto permite conservar la estructura de la capacitación sin ocultar que el material aún debe completarse.

## Videos

Los videos se cargan desde enlaces registrados en `app.js`. El botón de video permite cargar el iframe solo cuando el usuario lo solicita, favoreciendo el rendimiento de la página.

## Archivos principales

- `index.html`: estructura visible del módulo.
- `estilos.css`: diseño visual y adaptación responsiva.
- `app.js`: datos de capacitaciones, generación de tarjetas y carga de recursos.
- `imagenes/`: flyers e infografías.
- `documentos/`: diapositivas, guías y materiales descargables.
- `docs/`: documentación de autoría, finalidad, criterios y mantenimiento.

## Finalidad del mapa

Este documento permite comprender cómo se accede a la información del módulo y qué función cumple cada parte visible del enlace raíz.

## Autoría

La organización funcional de estos enlaces forma parte del **proyecto personal y desarrollo original del Psicólogo Gabriel Berrospi**.