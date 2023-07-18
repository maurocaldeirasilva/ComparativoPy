// Product

var ip = document.getElementById("ip");
var analogico = document.getElementById("analogico");

// Cameras
var audio = document.getElementById("audio");
var audiobi = document.getElementById("audiobi");
var detecintel = document.getElementById("detecintel");
var recfacial = document.getElementById("recfacial");
var detcface = document.getElementById("detcface");
var linhacerca = document.getElementById("linhacerca");
var zoom = document.getElementById("zoom");
var varifocal = document.getElementById("varifocal");
var mapcalor = document.getElementById("mapcalor");
var leituraplaca = document.getElementById("leituraplaca");


// Recorder
var reconhecimentofacial = document.getElementById("reconhecimentofacial");
var line = document.getElementById("line");
var mapacalor = document.getElementById("mapacalor");
var leideplaca = document.getElementById("leideplaca");
var contagempessoas = document.getElementById("contagempessoas");

//NVR / DVR
function exibirChannels() {
    var dvr = document.getElementById("dvr");
    var nvr = document.getElementById("nvr");
    var channels = document.getElementById("channels");
    if (dvr.checked || nvr.checked) {
        channels.style.display = "block";
    }else{
        channels.style.display = "none";
    }
}

// Chanels
function exibirRecorder() {
    var four = document.getElementById("four");
    var eight = document.getElementById("eight");
    var sixteen = document.getElementById("sixteen");
    var thirtytwo = document.getElementById("thirtytwo");
    var recorder = document.getElementById("recorder");
    if (four.checked || eight.checked || sixteen.checked || thirtytwo.checked) {
        recorder.style.display = "block";
    }else{
        recorder.style.display = "none";
    }
}
