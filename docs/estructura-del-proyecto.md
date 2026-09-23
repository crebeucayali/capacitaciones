# Estructura del proyecto

Este documento registra la organización referencial del módulo Capacitaciones Accesibles - CAP, parte del Ecosistema Virtual Accesible, EVA.

La estructura actual organiza los recursos por capacitación. Cada jornada puede tener una carpeta propia para conservar juntos sus archivos visuales, documentos y materiales asociados.

## Estructura general

```text
capacitaciones-accesibles/
├── index.html
├── estilos.css
├── app.js
├── README.md
├── AUTORIA.md
├── LICENSE
├── imagenes/
├── documentos/
└── docs/
    ├── sustento-del-proyecto-personal.md
    ├── autoria-y-contexto.md
    ├── fuentes-y-creditos.md
    ├── uso-permitido.md
    ├── alcance-formativo.md
    ├── finalidad-y-funciones.md
    ├── mapa-funcional-de-enlaces.md
    ├── criterios-de-publicacion.md
    ├── estructura-del-proyecto.md
    ├── bitacora-de-cambios.md
    └── criterios-para-videos-y-flyers.md
```

## Archivos principales

- `index.html`: estructura principal del sitio, cabecera, presentación, línea de tiempo y pie de página.
- `estilos.css`: diseño visual, adaptación responsiva y presentación de recursos.
- `app.js`: registro de capacitaciones, generación de tarjetas, carga de recursos y activación de videos.
- `README.md`: presentación del módulo, finalidad, autoría, uso permitido, estructura y estado general.
- `AUTORIA.md`: documento raíz de autoría del módulo CAP dentro del EVA.
- `LICENSE`: condiciones aplicables al código del repositorio.

## Recursos por capacitación

La carpeta `imagenes/primera-jornada/capacitacion-01/` a `capacitacion-10/` conserva los recursos existentes de la primera jornada, con los nombres y extensiones originales. La carpeta `imagenes/segunda-jornada/capacitacion-01/` a `capacitacion-10/` está preparada para recibir los recursos de cada sesión de la segunda jornada. `imagenes/logo-crebe.png` permanece como imagen compartida.

La carpeta `documentos/` queda reservada para diapositivas, guías o materiales descargables.

Cada jornada tiene su propia carpeta y cada sesión una subcarpeta. Los enlaces externos a diapositivas y videos permanecen en las páginas y scripts correspondientes.

## Videos

Los videos pueden enlazarse desde servicios externos mediante rutas registradas en `app.js`. La página puede mostrar un botón para cargar el video solo cuando el usuario lo solicite.

## Carpeta docs

La carpeta `docs` reúne documentos de respaldo autoral, formativo, técnico y organizativo.

## Organización progresiva

La estructura puede modificarse según el crecimiento real del proyecto. Si se agregan nuevos tipos de materiales, se recomienda crear carpetas específicas y registrar los cambios en la bitácora.
