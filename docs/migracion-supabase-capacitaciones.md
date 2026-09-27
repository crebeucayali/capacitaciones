# Migración de Capacitaciones a Supabase

## Alcance

La migración inicial traslada a Supabase únicamente información pública de las sesiones de capacitación. No incluye autenticación, formularios, nombres, correos electrónicos ni otros datos personales.

## Arquitectura

- GitHub Pages mantiene la interfaz y los archivos estáticos.
- Supabase mantiene la tabla `public.capacitaciones_sesiones`.
- El navegador consulta la tabla mediante la API REST con una clave publicable.
- La página conserva el contenido local existente como respaldo si la consulta remota falla.

## Seguridad

La tabla tiene Row Level Security (RLS) habilitado y forzado.

Permisos de clientes:

- `anon`: solo `SELECT`.
- `authenticated`: solo `SELECT`.
- No existen políticas públicas de `INSERT`, `UPDATE` o `DELETE`.
- Las operaciones administrativas permanecen fuera del navegador.

La clave utilizada por el frontend es una clave publicable de Supabase. No se publican claves secretas, `service_role`, contraseñas de base de datos ni credenciales administrativas.

## Datos migrados

Se migraron 20 sesiones:

- 10 sesiones de la primera jornada.
- 10 sesiones de la segunda jornada.

Se incluyen, según disponibilidad:

- fecha;
- número y jornada;
- título;
- tema;
- estado;
- módulo;
- flyer;
- infografía;
- PDF;
- video y vista previa;
- diapositivas y vista previa;
- materiales complementarios públicos.

## Respaldo local

La primera jornada conserva el arreglo histórico en `app.js` y sus scripts de actualización. La segunda jornada conserva su HTML estático. Estos contenidos funcionan como respaldo de disponibilidad.

Cuando Supabase responde correctamente, los datos remotos sustituyen o actualizan la representación visible. Si la consulta falla, la página continúa usando el contenido local.

## Archivos de integración

- `supabase-publico.js`: cliente REST público de solo lectura.
- `app.js`: carga remota de la primera jornada.
- `segunda-jornada.js`: carga remota de la segunda jornada.
- `primera-jornada.html` y `segunda-jornada.html`: permiten la conexión al dominio de Supabase mediante CSP.

## Privacidad

Esta etapa no utiliza Supabase Auth ni crea sesiones de usuario. La integración realiza consultas públicas de contenido. La Política de privacidad y la Política de cookies y tecnologías similares del ecosistema fueron actualizadas para reflejar esta conexión.

## Estado

Migración inicial aplicada en septiembre de 2026.
