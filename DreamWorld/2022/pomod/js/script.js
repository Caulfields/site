// function timeLeft(time) {
// 	const min = Math.floor(time / 60);

// 	let sec = time % 60;
// 	if (sec < 10){
// 		sec = `0${sec}`;
// 	};

// 	return `${min}:${sec}`;
// };


// let timePassed = 0;
// let timeInt = null;

// //Первый таймер
// document.getElementById("time__10").innerHTML = `${timeLeft(10)}`;

// function startTimer(timeConst) {
// 	let timeLimit = timeConst;
// 	timeInt = setInterval (() => {
// 		timePassed = timePassed += 1;
// 		timeLimit = timeConst - timePassed;
// 		if (timeLimit < 0) {
// 			return;
// 		} else {
// 			//Находить последний див 
// 		document.getElementById("time__10").innerHTML = timeLeft(timeLimit);
// 		};
// 	}, 1000);
// };

// function startTimer2(timeConst) {
// 	let timeLimit = timeConst;
// 	timeInt = setInterval (() => {
// 		timePassed = timePassed += 1;
// 		timeLimit = timeConst - timePassed;
// 		if (timeLimit < 0) {
// 			return;
// 		} else {
// 			//Находить последний див 
// 		document.getElementById("time__20").innerHTML = timeLeft(timeLimit);
// 		};
// 	}, 1000);
// };

// const startButton = document.getElementById("start1");
// startButton.addEventListener('click', () => startTimer(10));

// //Второй таймер
// document.getElementById("time__20").innerHTML = `${timeLeft(20)}`;

// const startButton2 = document.getElementById("start2");
// startButton2.addEventListener('click', () => startTimer2(20));

document.getElementById("start2").addEventListener("click", function(){
	let startButton = document.getElementById("start2");
  startButton.setAttribute("disabled", "disabled");
  let timer1 = document.getElementById("time__20");
  let count = 1200; // 20 minutes in seconds
  let interval = setInterval(function(){
    count--;
    timer1.innerHTML = Math.floor(count/60) + ":" + (count%60 < 10 ? "0" : "") + count%60;
    if(count === 0){
      clearInterval(interval);
    }
  }, 1000);
});

// Function to start timer 2
document.getElementById("startTimer2").addEventListener("click", function(){
  let timer2 = document.getElementById("timer2");
  let count = 600; // 10 minutes in seconds
  let interval = setInterval(function(){
    count--;
    timer2.innerHTML = Math.floor(count/60) + ":" + (count%60 < 10 ? "0" : "") + count%60;
    if(count === 0){
      clearInterval(interval);
      alert("Timer 2 is complete!");
    }
  }, 1000);
});