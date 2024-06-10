let showText = document.querySelector(".services__more");
let hideText = document.querySelector(".services__more_hidden");
let hiddenArticle = document.querySelector(".services__article_display");

let showBrands = document.querySelector(".brands__show");
let hideBrands = document.querySelector(".brands__hide");
let companiesList = document.querySelectorAll(
	".brands__list-item:nth-child(n + 9):nth-child(-n + 1000)",
);

let showDevices = document.querySelector(".repair__show");
let hideDevices = document.querySelector(".repair__hide");
let devicesList = document.querySelectorAll(
	".repair__list-item:nth-child(n + 5):nth-child(-n + 1000)",
);

showText.addEventListener("click", (e) => {
	e.preventDefault();

	hiddenArticle.style.display = "block";
	showText.style.display = "none";
	hideText.style.display = "block";
});

hideText.addEventListener("click", (e) => {
	e.preventDefault();

	hiddenArticle.style.display = "none";
	showText.style.display = "block";
	hideText.style.display = "none";
});

showBrands.addEventListener("click", (e) => {
	e.preventDefault();

	showBrands.style.display = "none";
	companiesList.forEach((element) => {
		element.style.display = "flex";
	});
	hideBrands.style.display = "block";
});

hideBrands.addEventListener("click", (e) => {
	e.preventDefault();

	showBrands.style.display = "block";

	companiesList.forEach((element) => {
		element.style.display = "none";
	});

	hideBrands.style.display = "none";
});

showDevices.addEventListener("click", (e) => {
	e.preventDefault();

	showDevices.style.display = "none";
	devicesList.forEach((element) => {
		element.style.display = "flex";
	});
	hideDevices.style.display = "block";
});

hideDevices.addEventListener("click", (e) => {
	e.preventDefault();

	showDevices.style.display = "block";

	devicesList.forEach((element) => {
		element.style.display = "none";
	});

	hideDevices.style.display = "none";
});
