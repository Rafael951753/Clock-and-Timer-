function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  const time = document.querySelector('.time');
  time.textContent = timeString;
}

setInterval(updateTime, 1000);




var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("pause");
var restartButton = document.getElementById("restart");
var ok=true; var st=false;
var totalSeconds = 0;
var timer;

function restartTimer() {
  if(ok==false|| st==true)  
  {totalSeconds=-1;
  ok=true;
  }
 
  }

function startTimer() {
  if(ok==true)
  {timer = setInterval(setTime, 1000);
    ok=false;
    st=false;
  }

  
  
}

function stopTimer() {
  ok=true;
  st=true;
  clearInterval(timer);

 
}

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

startButton.addEventListener("click", function() {
  startTimer();
  startButton.classList.add('b');
  stopButton.classList.remove('b');
});

stopButton.addEventListener("click", function() {
  stopTimer();
  startButton.classList.remove('b');
  stopButton.classList.add('b');
});

restartButton.addEventListener("click", function() {
    restartTimer();
    stopTimer();
    setTime();
    startButton.classList.remove('b');
    stopButton.classList.remove('b');
  });

//-----------------------------------------------------------------

  