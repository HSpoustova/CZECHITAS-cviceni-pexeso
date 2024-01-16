let otocPole = [];

const otocitKarticku = (event) => {
  const karticka = event.target;
  karticka.classList.toggle('otocena');
  karticka.disabled = true;
  if (otocPole.length < 2) {
    otocPole.push(karticka);
  }
  if (otocPole.length === 2) {
    if (
      otocPole[0].querySelector('.obrazek').src ===
      otocPole[1].querySelector('.obrazek').src
    ) {
      otocPole = [];
    } else {
      setTimeout(() => {
        otocPole[0].classList.add('otocena');
        otocPole[1].classList.add('otocena');
        otocPole[0].disabled = false;
        otocPole[1].disabled = false;
        otocPole = [];
      }, 1000);
    }
  }
};

const karticky = document.querySelectorAll('.karticka');
karticky.forEach((karticka) => {
  karticka.addEventListener('click', otocitKarticku);
});
