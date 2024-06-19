let callButton = document.querySelectorAll(".button-call");
let feedbackButton = document.querySelectorAll(".button-feedback");
let modalCall = document.querySelectorAll(".modal__wrapper");
let modalClose = document.querySelectorAll(".modal__close");
let overlayContent = document.querySelector(".overlay__content");

let appWrapper = document.querySelector(".app-wrapper");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let overlay = document.querySelector(".overlay");

for (let i = 0; i < callButton.length; i++) {
	callButton[i].addEventListener("click", (e) => {
		e.preventDefault();

		if (body.classList.value !== "restrictScroll") {
			body.classList.add("restrictScroll");
		}

		if (
			header.classList[1] !== "faded" &&
			overlayContent.classList[1] !== "faded" &&
			appWrapper.classList[1] !== "faded"
		) {
			header.classList.add("faded");
			overlayContent.classList.add("faded");
			appWrapper.classList.add("faded");
		}
		modalCall[0].classList.toggle("open");
		modalClose[0].classList.add("open");
	});
}

for (let i = 0; i < feedbackButton.length; i++) {
	feedbackButton[i].addEventListener("click", (e) => {
		e.preventDefault();

		if (body.classList.value !== "restrictScroll") {
			body.classList.add("restrictScroll");
		}

		if (
			header.classList[1] !== "faded" &&
			overlayContent.classList[1] !== "faded" &&
			appWrapper.classList[1] !== "faded"
		) {
			header.classList.add("faded");
			overlayContent.classList.add("faded");
			appWrapper.classList.add("faded");
		}

		modalCall[1].classList.toggle("open");
		modalClose[1].classList.add("open");
	});
}

for (let i = 0; i < modalClose.length; i++) {
	modalClose[i].addEventListener("click", (e) => {
		e.preventDefault();

		if (
			body.classList.value === "restrictScroll" &&
			overlay.classList[1] !== "open"
		) {
			body.classList.remove("restrictScroll");
		}

		if (
			header.classList[1] === "faded" &&
			overlayContent.classList[1] === "faded" &&
			appWrapper.classList[1] === "faded" &&
			overlay.classList[1] !== "open"
		) {
			header.classList.remove("faded");
			overlayContent.classList.remove("faded");
			appWrapper.classList.remove("faded");
		}

		modalCall[i].classList.remove("open");
		modalClose[i].classList.remove("open");
	});
}
