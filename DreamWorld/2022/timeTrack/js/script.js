function clockTimer()
{
  let date = new Date();
  
  let time = [date.getHours(),date.getMinutes()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|

  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  
  let current_time = [time[0],time[1]].join(':');
  let clock = document.getElementById("timeWorld");

  clock.innerHTML = current_time;
  
  setTimeout("clockTimer()", 1000);
}

clockTimer();

let work_div = document.createElement('div');
work_div.className = 'work_deal';
work_div.innerHTML = '<span class="work_name">Работа</span> <div class="work_time_space"> <span class="work_start">08:00</span> <span class="work_end">09:00</span> </div>';

let add_button = document.getElementById("add_work_buttom");


add_button.addEventListener('click', function(event) {
	work_ul.append(work_div);
});