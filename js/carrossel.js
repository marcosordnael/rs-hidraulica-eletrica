const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-item').length;
const indicators = document.querySelectorAll('.carousel-indicators li');

// Navegar para a imagem anterior (somente em telas maiores)
if (window.innerWidth > 768) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
        updateActiveIndicator();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
        updateActiveIndicator();
    });
}

// Navegar por indicadores (bolinhas)
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        updateActiveIndicator();
    });
});

// Atualizar a posição do carrossel
function updateCarousel() {
    const imageWidth = document.querySelector('.carousel-item').clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Atualizar o indicador ativo (bolinhas)
function updateActiveIndicator() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Suporte a arrastar (touch events) para dispositivos móveis
let startX = 0;
let endX = 0;

carouselImages.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselImages.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

carouselImages.addEventListener('touchend', () => {
    const threshold = 50; // Defina a distância mínima para considerar um deslize
    if (startX - endX > threshold) {
        // Deslizou para a esquerda
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    } else if (endX - startX > threshold) {
        // Deslizou para a direita
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    }
    updateCarousel();
    updateActiveIndicator();
});

// Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);

// Função para alternar o menu em telas pequenas
document.querySelector('.hamburger').addEventListener('click', function() {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('show');
});

// Função para reduzir o header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('small');
    } else {
        header.classList.remove('small');
    }
});
