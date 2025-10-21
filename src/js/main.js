// Знаходимо елементи на сторінці
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Додаємо слухач події "клік" на гамбургер
hamburger.addEventListener("click", () => {
    // При кліку додаємо/видаляємо клас "active" для гамбургера та меню
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Додаємо слухач події на кожен пункт меню
// щоб меню закривалось при виборі пункту
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});