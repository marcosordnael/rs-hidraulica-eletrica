// Selecionar o botão hambúrguer e o menu de navegação
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');
const submenuLink = document.querySelector('.has-submenu'); // Link para "Serviços"
const submenu = submenuLink.nextElementSibling; // Submenu de "Serviços"

// Adicionar evento de clique no botão hambúrguer para abrir/fechar o menu principal
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // Abre/fecha o menu
});

// Fechar o menu ao clicar em qualquer link exceto "Serviços"
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Se o link for "Serviços", prevenir o fechamento do menu e abrir o submenu
        if (link === submenuLink) {
            event.preventDefault(); // Prevenir o comportamento padrão do link
            submenu.classList.toggle('show-submenu'); // Abre/fecha o submenu
        } else {
            navMenu.classList.remove('show'); // Fecha o menu principal
        }
    });
});
