const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

window.addEventListener("click", (event) => {
    if (!navbarLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.checked = false; 
    }
});

navbarLinks.addEventListener("click", () => {
    menuToggle.checked = false; 
});

const categories = document.querySelectorAll('.category');
const closeButtons = document.querySelectorAll('.close');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryId = category.getAttribute('data-category');
        document.getElementById(categoryId).style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.style.display = 'none';
    });
});





