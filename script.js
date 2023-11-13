const counter = document.getElementById("counter");
const clicker = document.getElementById("clicker");

let clicks = 0;
counter.textContent = clicks;

clicker.addEventListener("click", () => {
	clicks += 1;
	counter.textContent = clicks;
});
