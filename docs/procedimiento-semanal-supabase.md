# Procedimiento semanal de publicación con Supabase

## Objetivo

Este procedimiento organiza la actualización de las sesiones de la Segunda Jornada desde la sesión 4 hasta la sesión 10. Supabase es la fuente principal de los datos y el contenido estático de GitHub se conserva como respaldo.

## Programación pendiente

| Sesión | Fecha |
| --- | --- |
| 4 | Jueves 01 de octubre de 2026 |
| 5 | Jueves 08 de octubre de 2026 |
| 6 | Jueves 15 de octubre de 2026 |
| 7 | Jueves 22 de octubre de 2026 |
| 8 | Jueves 29 de octubre de 2026 |
| 9 | Jueves 05 de noviembre de 2026 |
| 10 | Jueves 12 de noviembre de 2026 |

## Fuente principal

Tabla:

`public.capacitaciones_sesiones`

Cada sesión se identifica por la combinación:

`jornada + numero_sesion`

La base de datos impide que existan dos registros con la misma combinación.

## Flujo semanal

1. Mantener la sesión en `pendiente` mientras se preparan sus materiales.
2. Incorporar el título definitivo y revisar fecha, etiqueta y tema.
3. Subir a GitHub las imágenes locales que correspondan y registrar su ruta en Supabase.
4. Incorporar los enlaces disponibles de PDF, diapositivas, video o materiales complementarios.
5. Comprobar el control administrativo `private.capacitaciones_control_publicacion`.
6. Cambiar `estado` a `disponible` solamente cuando el título sea definitivo y exista al menos un recurso publicado.
7. Actualizar el respaldo local de GitHub.
8. Revisar visualmente la página pública y comprobar que la fuente activa sea Supabase.
9. Si se modifica la estructura de la base de datos, ejecutar nuevamente los asesores de seguridad y rendimiento.

## Reglas automáticas de Supabase

La base de datos valida antes de aceptar cambios:

- fecha, etiqueta y título no pueden quedar vacíos;
- una sesión marcada como `disponible` no puede conservar un título de "Tema pendiente de publicación";
- una sesión `disponible` debe tener al menos un recurso;
- flyer e infografía deben usar rutas locales bajo `imagenes/` con extensiones JPG, JPEG, PNG o WEBP;
- vistas previas de video y diapositivas deben utilizar Google Drive;
- enlaces de video deben utilizar Google Drive;
- PDF y diapositivas admiten los dominios de Google Drive o Google Docs previstos por el módulo;
- cada material complementario debe tener título y un enlace HTTPS permitido de Google Drive o Google Docs.

Si una actualización incumple estas reglas, PostgreSQL rechaza el cambio antes de publicarlo.

## Control administrativo

La vista privada:

`private.capacitaciones_control_publicacion`

permite revisar:

- si el título ya es definitivo;
- si existe al menos un recurso;
- si la sesión está lista para pasar a `disponible`;
- la fecha de la última modificación.

Consulta administrativa de referencia:

```sql
select
  jornada,
  numero_sesion,
  fecha_texto,
  titulo,
  estado,
  tiene_titulo_definitivo,
  tiene_recurso,
  lista_para_publicar,
  updated_at
from private.capacitaciones_control_publicacion
where jornada = 2
order by numero_sesion;
```

La vista pertenece al esquema privado y no se concede a los roles públicos `anon` ni `authenticated`.

## Permisos

La página pública conserva únicamente permiso de lectura:

- `anon`: `SELECT`;
- `authenticated`: `SELECT`;
- no hay escritura pública;
- las operaciones administrativas se realizan fuera del navegador público.

## Respaldo

La publicación no elimina el contenido estático existente. Si la consulta a Supabase falla, la página utiliza el respaldo local.

Para diagnóstico desde el navegador puede revisarse:

```js
document.documentElement.dataset.capacitacionesFuente
```

Los valores previstos son:

- `supabase`: la consulta remota funcionó;
- `respaldo-local`: se utilizó el contenido local por una falla de consulta.

## Alcance de privacidad

Este procedimiento administra únicamente información pública de las capacitaciones. No incorpora Supabase Auth, sesiones de usuario ni datos personales.
