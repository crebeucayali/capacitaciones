(() => {
  "use strict";

  const SUPABASE_URL = "https://dteimbhwtzghhsijeeld.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_tHbo1jTeW_dC90hdA5DvyQ_a6LrfKpq";

  async function consultarSesiones(jornada) {
    const numeroJornada = Number(jornada);
    if (!Number.isInteger(numeroJornada) || ![1, 2].includes(numeroJornada)) {
      throw new Error("Jornada no válida.");
    }

    const campos = [
      "jornada",
      "numero_sesion",
      "fecha",
      "fecha_texto",
      "etiqueta",
      "titulo",
      "tema",
      "estado",
      "modulo",
      "flyer_url",
      "infografia_url",
      "pdf_url",
      "video_preview_url",
      "video_url",
      "diapositivas_preview_url",
      "diapositivas_url",
      "recursos_adicionales",
      "updated_at"
    ].join(",");

    const endpoint = new URL(`${SUPABASE_URL}/rest/v1/capacitaciones_sesiones`);
    endpoint.searchParams.set("select", campos);
    endpoint.searchParams.set("jornada", `eq.${numeroJornada}`);
    endpoint.searchParams.set("order", "numero_sesion.asc");

    const respuesta = await fetch(endpoint.href, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_PUBLISHABLE_KEY,
        "Accept": "application/json"
      },
      credentials: "omit",
      cache: "no-store",
      referrerPolicy: "strict-origin-when-cross-origin"
    });

    if (!respuesta.ok) {
      throw new Error(`Supabase respondió con estado ${respuesta.status}.`);
    }

    const datos = await respuesta.json();
    if (!Array.isArray(datos)) {
      throw new Error("La respuesta de Supabase no tiene el formato esperado.");
    }

    return datos;
  }

  window.EVASupabasePublico = Object.freeze({
    consultarSesiones
  });
})();