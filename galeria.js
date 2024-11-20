let casa = 0;
let images = document.querySelectorAll('.hamburguer img');
let next = document.getElementById('seguir');
let prev = document.getElementById('voltar');
let intervalTime = 4000;
let container = document.querySelector('.images-container');

function show(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });

  // Ajuste a posição do contêiner para centralizar a imagem ativa
  const containerWidth = container.offsetWidth;  // Largura total do contêiner
  const imageWidth = images[0].offsetWidth;  // Largura de cada imagem
  const margin = 10;  // Margem entre as imagens

  // Condição para a primeira imagem
  const offset = index === 0 ? 0 : (containerWidth / 2) - (imageWidth / 2) - (index * (imageWidth + margin));  // Centraliza a imagem

  container.style.transform = `translateX(${offset}px)`;
}

next.addEventListener('click', () => {
  casa = (casa + 1) % images.length;
  show(casa);
});

prev.addEventListener('click', () => {
  casa = (casa - 1 + images.length) % images.length;
  show(casa);
});

let interval = setInterval(() => {
  casa = (casa + 1) % images.length;
  show(casa);
}, intervalTime);

show(casa);
