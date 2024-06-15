let links = document.querySelectorAll(".overlay__list-item-link");

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", (e) => {
		e.preventDefault();

		links[i].classList.toggle("overlay__list-item-link_is-active_true");
	});
}
