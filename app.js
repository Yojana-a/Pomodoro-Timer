let clock = document.querySelector(".clock-container");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let longBreak = document.querySelector(".long");
let shortBreak = document.querySelector(".short");

let timer;
let totalTime = 25 * 60; //25mins
let remainingTime = totalTime;
let isRunning=false;//tracks if time is currently active

function convert(seconds){//converting into 00 : 00 format
    let mins = Math.floor(seconds/60);//in mins
    let secs = seconds % 60;//gives remaining seconds left
    let digitMin = mins.toString().padStart(2,'0');//if mins = 9mins then 09 shown
    let digitSec = secs.toString().padStart(2,'0');//same as mins
    return `${digitMin} : ${digitSec}`;
}

function updateTime(){
    clock.innerText = convert(remainingTime);
}

function startTimer(){
    if(!isRunning){
        timer = setInterval(()=>{//setInterval(func,delay);
            if(remainingTime > 0){
                remainingTime--;
                updateTime();
            }else{//if 0
                clearInterval(timer);
                isRunning=false;//no running after 0 so update to false
                alert("Time's Up! Take a Break");
            }
        },1000);//1s
        isRunning=true;//if not already running(above lines don't work unless isRunning=true) run the timer
    }
}
start.addEventListener("click",startTimer);//not startTimer()cause automatically starts the timer 
    

reset.addEventListener("click", ()=>{//resets to the original time i.e 25
    clearInterval(timer);//countdown freezes
    remainingTime=totalTime;//updating to 25
    updateTime();
    isRunning=false;
});

longBreak.addEventListener("click",()=>{//15 mins
    clearInterval(timer);
    totalTime = 15 *60;
    remainingTime = totalTime;
    updateTime();
    isRunning=false;
    startTimer();
});

shortBreak.addEventListener("click",()=>{//5 mins
    clearInterval(timer);
    totalTime = 5 *60;
    remainingTime = totalTime;
    updateTime();
    isRunning=false;
    startTimer();
});

stop.addEventListener("click", ()=>{//stops timer at where it is
    clearInterval(timer);//countdown freezes
    isRunning=false;
});


updateTime();

    