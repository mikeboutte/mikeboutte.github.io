function toggleNav() {
	var nav = document.getElementById("mainnav");
	if (nav.classList.contains("open")) {
		nav.classList.remove("open");
	} else {
		nav.classList.add("open");
	}
}

document.addEventListener("DOMContentLoaded", function() {
	// do the thing
	document.fonts.ready.then(function() {
		console.log("fonts loaded");
		BaselineGrid.init();
	});
});