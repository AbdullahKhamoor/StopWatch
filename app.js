
let min = 0;
let sec = 0;
let msec = 0;


const minHeading = document.getElementById('min');
const secHeading = document.getElementById('sec');
const msecHeading = document.getElementById('msec');
let interval;

const timer = ()=>{

  msec++
  msecHeading.innerHTML = msec;

if(msec >= 100){
    sec++ ;
    msec = 0;
    secHeading.innerHTML = sec ;
}else if(sec >= 60){
   min++ ;
   sec = 0 ;
   minHeading.innerHTML = min ;
} 

}

let start = ()=>{

interval = setInterval(timer, 10)
let a = document.getElementById('btn').disabled = true;

}

let stop = ()=>{

    clearInterval(interval)
    let a = document.getElementById('btn').disabled = false;

}

let Reset = ()=>{

min = 0;
sec = 0;
msec = 0;

minHeading.innerHTML = min;
secHeading.innerHTML = sec;
msecHeading.innerHTML = msec;

stop()

}