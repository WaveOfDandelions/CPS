let callButton = document.querySelectorAll(".button-call");
let modalCall = document.querySelector(".modal__wrapper");
let modalClose = document.querySelector(".modal__close");
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
		modalCall.classList.toggle("open");
		modalClose.classList.add("open");
	});
}

modalClose.addEventListener("click", (e) => {
	e.preventDefault();

	body.classList.toggle("restrictScroll");
	body.classList.add("restrictScroll");
	modalCall.classList.remove("open");
	header.classList.toggle("faded");
	overlayContent.classList.toggle("faded");
	appWrapper.classList.toggle("faded");
	modalClose.classList.remove("open");
});
