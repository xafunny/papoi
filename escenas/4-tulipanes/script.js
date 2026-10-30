onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function showFlowers() {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const flowersScreen = document.getElementById('flowersScreen');
  const button = document.querySelector('.minimal-btn');

  button.style.transform = 'scale(0.95)';
  button.style.opacity = '0.7';

  setTimeout(() => {

    welcomeScreen.classList.add('fade-out');

    setTimeout(() => {

      welcomeScreen.style.display = 'none';
      flowersScreen.style.display = 'block';

      setTimeout(() => {
        flowersScreen.classList.add('show');

        const flowers = document.querySelectorAll('.flower');
        flowers.forEach((flower, index) => {
          flower.style.opacity = '0';
          flower.style.transform = 'translateY(20px) scale(0.8)';

          setTimeout(() => {
            flower.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            flower.style.opacity = '1';
            flower.style.transform = 'translateY(0) scale(1)';
          }, index * 150);
        });

        const grassElements = document.querySelectorAll('.growing-grass, .grow-ans, .long-g');
        grassElements.forEach((element, index) => {
          element.style.opacity = '0';
          element.style.transform = 'translateY(10px)';

          setTimeout(() => {
            element.style.transition = 'all 0.5s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }, 800 + (index * 50));
        });
      }, 100);
    }, 800);
  }, 200);
}

function changeName(newName) {
  const nameElement = document.querySelector('.name');
  if (nameElement && newName) {
    nameElement.style.transition = 'all 0.3s ease';
    nameElement.style.transform = 'scale(0.8)';
    nameElement.style.opacity = '0';

    setTimeout(() => {
      nameElement.textContent = newName;
      nameElement.style.transform = 'scale(1)';
      nameElement.style.opacity = '1';
    }, 300);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.minimal-btn');
  if (button) {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  }
});

function mensajeFinal() {
  const box = document.getElementById('final');
  const linea = document.getElementById('finalLinea');
  const firma = document.getElementById('finalFirma');
  const texto = 'Gracias por ser mi amor bonito, Eres mi tulipán favorito 🌷';
  box.classList.add('on');
  let i = 0;
  (function escribir() {
    linea.innerHTML = texto.slice(0, i) + '<span class="cur">|</span>';
    if (i++ < texto.length) return setTimeout(escribir, 65);
    linea.textContent = texto;
    firma.classList.add('on');
    setTimeout(() => {
      box.classList.add('fin');
      try { parent.postMessage({ tipo: 'listo' }, '*'); } catch (e) {}
    }, 1800);
  })();
}
const _showFlowers = showFlowers;
showFlowers = function () {
  _showFlowers();
  setTimeout(mensajeFinal, 9000);
};
