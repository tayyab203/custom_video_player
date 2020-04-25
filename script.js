const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play videos
function toggleVideoStatus(){
    if (video.paused) {
        video.play();
    }else{
        video.pause();
    }
}

function updateplayIcon(){
    if(video.pause){
        play,innerhtaml='<i class="fa fa-play fa-2c"></i>'
    }else{
        play,innerhtaml='<i class="fa fa-pause fa-2c"></i>'
    }
}

function updateprogress(){
   progress.value = (video.currentTime/video.duration)*100;

   let mins = math.floor(video.currentTime/60);
   if(mins < 10){
       mins = '0' +String(mins);
   }

   let secs = math.floor(video.currentTime%60);
   if(secs < 10){
       secs = '0' +String(secs);
   }

    timestamp.innerHTML ='${mins}:${secs}';
}

function setVideoprogress(){
  video.currentTime = (+progress.value*video .duration)/
  100;
}

function stopvideo(){
    video.currentTime = 0;
    video.pause();
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updateplayIcon);
video.addEventListener('play', updateplayIcon);
video.addEventListener('timeupdate', toggleVideoStatus);

play.addEventLister('click',toggleVideoStatus);

stop.addEventLister('click',stopvideo);

progress.addEventLister('change',setVideoprogress);
