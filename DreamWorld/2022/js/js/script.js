
const textElement = document.querySelector ('.text');
const textElementContest = textElement.innerHTML;

const buttclick = document.querySelector ('.butt');

buttclick.onclick = function () {
	console.log('Click!');
};

textElement.innerHTML = `<p>${textElementContest}<p> Ты красава`;
