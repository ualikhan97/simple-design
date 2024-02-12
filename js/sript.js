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
   breakpoints: {
      220: {
         slidesPerView: 1.2,
         slidesPerGroup: 1,
         spaceBetween: 35,
      },
      640: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },

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

document.querySelectorAll(".faq__contain").forEach((faqPlus, index) => {
   faqPlus.addEventListener("click", function () {
      this.querySelector(".faq__plus").classList.toggle("clicked");

      document
         .querySelectorAll(".plus-icon")
         [index].classList.toggle("clicked");
      document
         .querySelectorAll(".faq__question")
         [index].classList.toggle("show");
   });
});
