import Swiper from "swiper/bundle";

new Swiper(".services__swiper-slider", {
	direction: "horizontal",
	freeMode: true,
	watchSlidesProgress: true,

	autoplay: {
		delay: 5000,
	},
});

new Swiper(".brands__swiper-slider", {
	direction: "horizontal",
	freeMode: true,
	watchSlidesProgress: true,

	slidesPerView: "auto",

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

new Swiper(".repair__swiper-slider", {
	direction: "horizontal",
	freeMode: true,
	watchSlidesProgress: true,
	centeredSlides: true,
	slidesPerView: "1",

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

new Swiper(".prices__swiper-slider", {
	direction: "horizontal",
	freeMode: true,
	watchSlidesProgress: true,
	centeredSlides: true,
	slidesPerView: "auto",

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
