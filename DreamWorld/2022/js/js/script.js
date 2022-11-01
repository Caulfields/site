
const textElement = document.querySelector ('.text');
const textElementContest = textElement.innerHTML;

const buttclick = document.querySelector ('.butt');

function clickConsole() {
	console.log('Click!');
};

function clickConsoleTwo() {
	console.log('Clack!');
};


textElement.innerHTML = `<p>${textElementContest}<p> Ты красава`;


buttclick.addEventListener("click", clickConsole);
buttclick.addEventListener("click", clickConsoleTwo);