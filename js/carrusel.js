document.querySelectorAll('[data-carousel]').forEach((carrusel) => {
  const controles = carrusel.parentElement.querySelectorAll('.carrusel-btn');

  controles.forEach((boton) => {
    boton.addEventListener('click', () => {
      const primeraTarjeta = carrusel.querySelector('.carrusel-slide');
      const espacio = parseFloat(getComputedStyle(carrusel).gap) || 0;
      const distancia = primeraTarjeta ? primeraTarjeta.getBoundingClientRect().width + espacio : 320;

      carrusel.scrollBy({
        left: distancia * Number(boton.dataset.dir),
        behavior: 'smooth'
      });
    });
  });
});
