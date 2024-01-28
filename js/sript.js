let burgerElement = document.querySelector(".burger");

burgerElement.addEventListener("click", function () {
   this.classList.toggle("active");
   document.querySelector(".header__shell").classList.toggle("active");
   document.body.classList.toggle("lock");
});

var swiper = new Swiper(".intro__swiper", {
   // Настройки Swiper, если нужно
   loop: true, // Зацикливание слайдов
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
