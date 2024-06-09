let burger = document.querySelector(".header__button-burger");
let burgerOverlay = document.querySelector(".overlay__button-burger");
let lines = document.querySelector(".line-container");
let burgerTransform = document.querySelector(
	".header__content-burger-container",
);

let appWrapper = document.querySelector(".app-wrapper");

let overlay = document.querySelector(".overlay");
let header = document.querySelector(".header");
let body = document.querySelector("body");

burger.addEventListener("click", (e) => {
	e.preventDefault();

	body.classList.toggle("restrictScroll");
	burgerTransform.classList.toggle("open");
	overlay.classList.toggle("open");
	header.classList.toggle("faded");
	appWrapper.classList.toggle("faded");
	lines.classList.toggle("open");
});

burgerOverlay.addEventListener("click", (e) => {
	e.preventDefault();

	body.classList.toggle("restrictScroll");
	overlay.classList.toggle("open");
	header.classList.toggle("faded");
	appWrapper.classList.toggle("faded");
	lines.classList.toggle("open");
	burgerTransform.classList.toggle("open");
});
