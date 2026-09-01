(() => {
  'use strict';

  if (typeof capacitaciones === 'undefined' || !Array.isArray(capacitaciones)) return;

  const videosPorFecha = {
    'Viernes 24 de julio': '1zYWgFudF8NyzF86N4Jp7V1sdlG6_6-PF',
    'Viernes 31 de julio': '1XZD7Lk57nJNL9wB7AOfhBhcJNAflpPHg',
    'Viernes 07 de agosto': '1DJwxsATrcM2bkBl-xI8-lU-HfOtXOSlo',
    'Viernes 14 de agosto': '1prwJPr3p5ZAzlmuqM0cUZYOLw2bQ5jDt'
  };

  Object.entries(videosPorFecha).forEach(([fecha, id]) => {
    const sesion = capacitaciones.find(item => item.fecha === fecha);
    if (!sesion || !sesion.recursos) return;

    sesion.recursos.video = `https://drive.google.com/file/d/${id}/preview`;
    sesion.recursos.videoDrive = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
  });

  if (typeof renderizarCapacitaciones === 'function') {
    renderizarCapacitaciones(capacitaciones);
  }
})();
