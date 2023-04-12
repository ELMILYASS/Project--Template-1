let links = document.querySelector(".links");
let icon = links.children[0];

let ul = links.children[1];
links.addEventListener("click", function () {
	if (ul.style.display === "block") {
		ul.style.display = "none";
		icon.children[1].style.width = "50%";
	} else {
		ul.style.display = "block";
		icon.children[1].style.width = "100%";
	}
});

