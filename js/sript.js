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
var roomsSwiper = new Swiper(".rooms__swiper", {
   // Настройки Swiper, если нужно
   loop: true, // Зацикливание слайдов
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      dragSize: "100%", // Размер активного скроллбара
   },
});

var newSwipe = new Swiper(" #roomsswipe", {
   loop: true,
   navigation: {
      nextEl: "#roomswrap1 .arrow_next",
      prevEl: "#roomswrap1 .arrow_prev",
   },
});
var newSwipe = new Swiper("#roomsswipe2", {
   loop: true,
   navigation: {
      nextEl: "#roomswrap2 .arrow_next",
      prevEl: "#roomswrap2 .arrow_prev",
   },
});
var newSwipe = new Swiper("#roomsswipe3", {
   loop: true,
   navigation: {
      nextEl: "#roomswrap3 .arrow_next",
      prevEl: "#roomswrap3 .arrow_prev",
   },
});
