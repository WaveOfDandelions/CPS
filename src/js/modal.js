let callButton = document.querySelectorAll(".button-call");
let feedbackButton = document.querySelectorAll(".button-feedback");
let modalCall = document.querySelectorAll(".modal__wrapper");
let modalClose = document.querySelectorAll(".modal__close");
let overlayContent = document.querySelector(".overlay__content");

let appWrapper = document.querySelector(".app-wrapper");
let header = document.querySelector(".header");
let body = document.querySelector("body");

for (let i = 0; i < callButton.length; i++) {
	callButton[i].addEventListener("click", (e) => {
		e.preventDefault();

		body.classList.toggle("restrictScroll");
		body.classList.add("restrictScroll");
		header.classList.toggle("faded");
		overlayContent.classList.toggle("faded");
		appWrapper.classList.toggle("faded");
		modalCall[0].classList.toggle("open");
		modalClose[0].classList.add("open");
	});
}

for (let i = 0; i < feedbackButton.length; i++) {
	feedbackButton[i].addEventListener("click", (e) => {
		e.preventDefault();

		body.classList.toggle("restrictScroll");
		body.classList.add("restrictScroll");
		header.classList.toggle("faded");
		overlayContent.classList.toggle("faded");
		appWrapper.classList.toggle("faded");
		modalCall[1].classList.toggle("open");
		modalClose[1].classList.add("open");
	});
}

for (let i = 0; i < modalClose.length; i++) {
	modalClose[i].addEventListener("click", (e) => {
		e.preventDefault();

		body.classList.toggle("restrictScroll");
		body.classList.add("restrictScroll");
		modalCall[i].classList.remove("open");
		header.classList.toggle("faded");
		overlayContent.classList.toggle("faded");
		appWrapper.classList.toggle("faded");
		modalClose[i].classList.remove("open");
	});
}
