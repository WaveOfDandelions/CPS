let links = document.querySelectorAll(".overlay__list-item-link");
let activeLink = null; // Переменная для хранения текущей активной ссылки
let activeMenuItem = null;

let menu = document.querySelectorAll(".services__list-item");

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", function (e) {
		e.preventDefault();

		// Удаляем активный класс у предыдущей активной ссылки, если она существует
		if (activeLink) {
			activeLink.classList.remove(
				"overlay__list-item-link_is-active_true",
			);
		}

		// Добавляем активный класс к кликнутой ссылке
		links[0].classList.remove("overlay__list-item-link_is-active_true");
		e.currentTarget.classList.add("overlay__list-item-link_is-active_true");

		// Обновляем активную ссылку
		activeLink = e.currentTarget;
	});
}

for (let i = 0; i < menu.length; i++) {
	menu[i].addEventListener("click", function (e) {
		e.preventDefault();

		// Удаляем активный класс у предыдущей активной ссылки, если она существует
		if (activeMenuItem) {
			activeMenuItem.classList.remove(
				"services__list-item_status_active",
			);
		}

		// Добавляем активный класс к кликнутой ссылке
		menu[0].classList.remove("services__list-item_status_active");
		e.currentTarget.classList.add("services__list-item_status_active");

		// Обновляем активную ссылку
		activeMenuItem = e.currentTarget;
	});
}
