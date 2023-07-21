// Product



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

//Product
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

function exibirCamerasIP() {
    var ip = document.getElementById("ip");
    var camerasip = document.getElementById("camerasip");
    if (ip.checked || analogica.checked) {
        camerasip.style.display = "block";
    }else{
        camerasip.style.display = "none";
    }
}

function exibirCamerasAnalogic() {
    var analogica = document.getElementById("analogica");
    var camerasanalogica = document.getElementById("camerasanalogica");
    if (ip.checked || analogica.checked) {
        camerasanalogica.style.display = "block";
    }else{
        camerasanalogica.style.display = "none";
    }
}

function validarProdutos() {
    var checkboxes = document.getElementsByName("produtos");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxes[i].checked = true;
        } else {
            checkboxes[i].checked = false;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Adicione também as chamadas das funções existentes para os eventos de mudança das caixas de seleção.
    document.getElementById("dvr").addEventListener("change", function() {
        exibirChannels();
        exibirRecorder();
    });

    document.getElementById("nvr").addEventListener("change", function() {
        exibirChannels();
        exibirRecorder();
    });

    document.getElementById("four").addEventListener("change", function() {
        exibirChannels();
        exibirRecorder();
    });

    document.getElementById("eight").addEventListener("change", function() {
        exibirChannels();
        exibirRecorder();
    });

    document.getElementById("sixteen").addEventListener("change", function() {
        exibirChannels();
        exibirRecorder();
    });

    document.getElementById("thirtytwo").addEventListener("change", function() {
        exibirChannels();
        exibirRecorder();
    });

    document.getElementById("ip").addEventListener("change", function() {
        exibirCamerasIP();
    });

    document.getElementById("analogica").addEventListener("change", function() {
        exibirCamerasAnalogic();
    });

    document.getElementById("dvr").addEventListener("click", function() {
        validarProdutos()
    });
    document.getElementById("nvr").addEventListener("click", function(){
        validarProdutos();
    });
    document.getElementById("ip").addEventListener("click", function() {
        validarProdutos()
    });    
    document.getElementById("analogica").addEventListener("click", function() {
        validarProdutos()
    });
});

