function changeText(image) {
  const h1 = document.querySelector('.h1-text');
  const h3 = document.querySelector('.h3-text');

  switch (image) {
    case 'img/product2.png':
      h1.textContent = 'SPECIALIST GLOVES FADE BUTTERFLY MARBLE FADE';
      h3.textContent = 'R$20.00';
      break;
    case 'img/product7.png':
      h1.textContent = 'SPORT GLOVES VICE ★CLASSIC KNIFE FADE';
      h3.textContent = 'R$20.00';
      break;
    case 'img/product3.png':
      h1.textContent = 'GLOVES SNOW LEOPARD SKELETON KNIFE URBAN MASKED';
      h3.textContent = 'R$15.00';
      break;
    case 'img/product4.png':
      h1.textContent = 'COBALT SKULLS | M9BAYONET DOPPLER';
      h3.textContent = 'R$12.00';
      break;
    case 'img/product5.png':
      h1.textContent = 'SPORT GLOVES AMPHIBIOUS FLIP KNIFE BRIGHT WATER';
      h3.textContent = 'R$12.00';
      break;
    case 'img/product6.png':
      h1.textContent = 'GLOVES EMERALD WEB BAYONET GAMMA DOPPLER';
      h3.textContent = 'R$12.00';
      break;
    case 'img/product1.png':
      h1.textContent = 'GLOVES CRIMSON KIMONO SKELETON CRIMSON WEB';
      h3.textContent = 'R$15.00';
      break;
    default:
      h1.textContent = 'Texto padrão';
      h3.textContent = 'Preço padrão';
  }
}

function slider(anything) {
  const img = document.querySelector('.one');
  img.src = anything;
  changeText(anything); // Adicionando a chamada da função changeText()
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

let sobreLink = document.querySelector('#sobre');
let submenuSobre = document.querySelector('#submenu-sobre');

sobreLink.addEventListener('click', function(event) {
  event.preventDefault();
  submenuSobre.classList.toggle('open-submenu');
});

