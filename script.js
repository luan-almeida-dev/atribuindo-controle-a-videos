function Onout () {

    document.querySelector('.container').addEventListener('mouseout', ocultar());

    function ocultar() {

        document.querySelector('.controle').style.display = 'none';

    };

}

function Onover() {


    document.querySelector('.container').addEventListener('mouseover', mostrar());

    function mostrar() {

        document.querySelector('.controle').style.display = 'block';

    };

}

let video = document.getElementById("video1")


function play() {
    video.play()

}

function stop() {
    video.pause()
    video.currentTime = 0

}

function speed() {
    video.playbackRate += 0.1;

}

function loss() {
    video.playbackRate -= 0.1;

}

function avanced() {
    video.currentTime += 5;

}

function retorar() {
    video.currentTime -= 5;

}

