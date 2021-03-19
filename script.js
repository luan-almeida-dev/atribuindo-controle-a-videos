let video = document.getElementById("video1")

function play(){
    video.play()

}

function stop(){
    video.pause()
    video.currentTime = 0

}

function speed(){
    video.playbackRate += 0.1;

}

function loss(){
    video.playbackRate -= 0.1;

}

function avanced(){
    video.currentTime += 5;

}

function retorar(){
    video.currentTime -= 5;

}

let fechar = document.getElementsByClassName("btn")
function fecharcontrole(fechar) {
    
    fechar.style.top = "-6px"

}