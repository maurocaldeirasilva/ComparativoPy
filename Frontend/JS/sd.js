function hideit(elemento){		
    var tb = [
        ['VIP5232SDIA', '<img class="img3" src="../HTML/img/vip5232sdia.png">', 'titulineo', 'VIP 5232 SD IA', 'titulineo', '1/2.8" 2 MP STARVIS™ CMOS', 'SIM', '4.9 mm – 156 mm', 'H: 62.8° - 2.2° | V: 36.7°–1.3°', '32x', '16x', 'Não', 'titulineo', 'H.264/ H.264B/ H.264H/ H.265/ MJPEG', '2MP / 1.3MP / 1MP', 'BLC, HLC, WDR (120dB)', '-', 'Detecção de Face (metadados) / Linha Virtual / Cerca Virtual / Objeto Aband. Retir. / Mapa de Calor / Detecção Inteligente', 'Sim', 'titulineo', '1 entrada | 1 saída', 'G.711a; G.711Mu; G.726; AAC; MPEG2-Layer2, G722.1 G729, G723', 'titulineo', 'RJ45 (10/100BASE-T)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '64 Mbps', '20', 'Não', 'Sim', 'titulineo', 'Cartão micro-SD de até 256 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Sim', 'DC 24V/2.5A, Poe Ativo (802.3at)', '< 16 W', 'IP66 e IK10'],
        ['VIP3212SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VIP 3212 SD IR','titulineo', '1/2.8" 2 MP STARVIS™ CMOS', 'Não', '5.3 a 64 mm', 'H: 58,2° - 4,8° | V: 32,9° - 2,8°', '12x', '4x', 'Sim', 'titulineo', 'H.265 / H.264H / H.264 / H.264B / MJPEG', '1080p / 720p / D1 / VGA / CIF ', 'BLC / HLC / WDR (120 dB)', '-', 'Linha virtual, Cerca virtual, Abandono/ Retirada de objetos, Mapa de calor e Detecção de face', 'Não', 'titulineo', '1 entrada | 1 saída', 'G.711a / G.711Mu / AAC / G.726', 'titulineo', 'RJ45 (10/100Base-Tx)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '30 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro-SD de até 128 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Não', 'DC 12 V / 3 A (± 25%) PoE+ (802.3at)', '< 20 W', 'IP66'],
        ['VIP3215SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VIP 3215 SD IR','titulineo', '1/2.8" 2 MP STARVIS™ CMOS', 'SIM', '5.3 a 79 mm', 'H: 58,75° - 3,94° | V: 33,8° - 2,26°', '15x', '16x', 'Sim', 'titulineo', 'H.265 / H.264H / H.264 ', '1080p / 720p / D1 / CIF ', 'BLC / HLC / WDR (120db)', '-', 'Linha virtual, Cerca virtual, Abandono/Retirada de objetos, Mapa de calor e Detecção de face', 'Não', 'titulineo', '1 entrada | 1 saída', 'G.711a / G.711Mu / AAC / G.726', 'titulineo', 'RJ45 (10/100Base-Tx)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '30 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro-SD de até 128 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Não', 'DC 12 V / 3 A (± 25%) PoE+ (802.3at)', '< 20 W', 'IP66'],
        ['VIP3220SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VIP 3220 SD IR','titulineo', '1/2.8" 2 MP STARVIS™ CMOS', 'SIM', '5 mm – 80 mm', 'H: 57.7° - 4.5° | V:32.7°–2.6°', '20x', '16x', 'Sim', 'titulineo', 'H.264/ H.264B/ H.264H/ H.265/ MJPEG', '2MP / 1.3MP / 1MP / D1 / CIF', 'BLC, HLC, DWDR', '-', 'Linha virtual, Cerca virtual, Abandono/Retirada de objetos, Mapa de calor e Detecção de face', 'Não', 'titulineo', '1 entrada | 1 saída', 'G.711a; G.711Mu; G.726; AAC; MPEG2-Layer2, G722.1; G729', 'titulineo', 'RJ45 (10/100BASE-T)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '48 Mbps', '20', 'Não', 'Sim', 'titulineo', 'Cartão micro-SD de até 256 GB (vendido separadamente) e FTP', 'Não', 'Sim', 'DC 12V / 5A', 'Poe Ativo(802.3at)', '<6.1 W', 'IP66'],
        ['VIP3225SDIRIA', '<img class="img3" src="../HTML/img/vip3225sdiria.png">', 'titulineo', 'VIP 3225 SD IR IA','titulineo', '1/2.8" 2 MP CMOS', 'SIM', '4.8 mm – 120 mm', 'H: 62.8° - 2.6° | V:33.2°–1.7°', '25x', '16x', 'Sim', 'titulineo', 'H.264/ H.264B/ H.264H/ H.265/ MJPEG', '2MP / 1.3MP / 1MP / D1 / CIF', 'BLC, HLC, WDR (120dB)', '-', 'Detecção de Face (metadados) / Linha Virtual / Cerca Virtual / Objeto Aband. Retir. / Mapa de Calor / Detecção Inteligente', 'Sim', 'titulineo', '1 entrada | 1 saída', 'PCM; G.711a; G.711Mu; G.726; AAC; MPEG2-Layer2, G722.1; G729, G723', 'titulineo', 'RJ45 (10/100BASE-T)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '64 Mbps', '19', 'Não', 'Sim', 'titulineo', 'Cartão micro-SD de até 256 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Sim', 'DC 12V / 3A, Poe Ativo(802.3at)', '<13W', 'IP66'],
        ['VIP5230SD', '<img class="img3" src="../HTML/img/vhd5230sd.png">', 'titulineo', 'VIP 5230 SD','titulineo', '1/2.8" 2 megapixels STARVIS™CMOS', 'SIM', '4,5 a 135 mm', 'H: 67,8° a 2,4°', '30x', '16x', 'Não', 'titulineo', 'H.265 / H.264H / H.264 / H.264B /MJPEG', '2MP / 1.3MP / 1MP / D1 / CIF', 'BLC / HLC / WDR (120db)', '-', 'Detecção de Face / Linha Virtual / Cerca Virtual / Objeto Aband. Retir. / Mapa de Calor / Mudança de cena', 'Sim', 'titulineo', '1 entrada | 1 saída', 'G.711a / G.711Mu / AAC / G.722 / G.726 / G.729 /MPEG2-L2', 'titulineo', 'RJ45 (10/100Base-Tx)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '30 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro-SD de até 128 GB (vendido separadamente) e FTP', '7 Entradas | 2 Saída', 'Não', '24 Vac / 3 A (± 10%); PoE+(802.3at)', '< 20 W', 'IP67 e IK10'],
        ['VIP5220SD', '<img class="img3" src="../HTML/img/vhd5230sd.png">', 'titulineo', 'VIP 5220 SD', 'titulineo','1/2.8" Starvis CMOS Starlight', 'SIM', '4,7 a 94 mm ', 'H: 59° - 3,7° | V: 32° - 2,1°', '20x', '4x', 'Não', 'titulineo', 'H.265 / H.264H / H.264 / H.264B / MJPEG', '2MP / 1.3MP / 1MP / D1 / VGA / CIF', 'BLC / HLC / WDR (120 db)', '-', 'Detecção de Face / Linha Virtual / Cerca Virtual / Objeto Aband. Retir. / Mapa de Calor', 'Sim', 'titulineo', '1 entrada | 1 saída', 'G.711A / G.711Mu / G.726 / AAC / MPEG2-Layer2 / G.722.1 / G.729', 'titulineo', 'RJ45 (10/100 Base-T)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '48 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro-SD de até 128 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Não', '24 Vac / 1,5 A (± 10%); PoE+ (802.3at)', '< 23 W', 'IP67 e IK10'],
        ['VIP5220SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VIP 5220 SD IR','titulineo', '1/2.8" Starvis CMOS Starlight', 'SIM', '4,7 a 94 mm ', 'H: 59° - 3,7° | V: 32° - 2,1°', '20x', '4x', 'Sim', 'titulineo', 'H.265 / H.264H / H.264 / H.264B / MJPEG', ' 2MP / 1.3MP / 1MP / D1 / VGA / CIF', 'BLC / HLC / WDR(120 db)', ' - ', 'Detecção de Face / Linha Virtual / Cerca Virtual / Objeto Aband.Retir. / Mapa de Calor', 'Sim', 'titulineo', '1 entrada | 1 saída', 'G.711A / G.711Mu / G.726 / AAC / MPEG2 - Layer2 / G.722.1 / G.729', 'titulineo', 'RJ45(10 / 100 Base - T)', 'Intelbras DDNS, DDNS No - IP®, DynDNS®', '48 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro - SD de até 128 GB(vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Não', '24 Vac / 1, 5 A(± 10 %); PoE + (802.3at) ', ' < 23 W', 'IP66'],
        ['VIP5225SD', '<img class="img3" src="../HTML/img/vhd5230sd.png">', 'titulineo', 'VIP 5225 SD', 'titulineo','1/2.8" Starvis CMOS Starlight', 'SIM', '4,8 a 120 mm', 'H: 59,2° - 2,4° | V: 32° - 2,1°', '25x', '16x', 'Não', 'titulineo', 'H.265 / H.264H / H.264 / H.264B / MJPEG', '2MP / 1.3MP / 1MP / D1 / CIF', 'BLC / HLC / WDR (120 db)', '-', 'Detecção de Face / Linha Virtual / Cerca Virtual / Objeto Aband. Retir. / Mapa de Calor', 'Sim', 'titulineo', '1 entrada | 1 saída', 'G.711A / G.711Mu / G.726 / AAC / MPEG2-Layer2 / G.722.1 / G.729', 'titulineo', 'RJ45 (10/100 Base-T)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '48 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro-SD de até 128 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Não', '24 Vac / 1,5 A (± 10%); PoE+ (802.3at)', '< 23 W', 'IP67 e IK10'],
        ['VIP5225SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VIP 5225 SD IR','titulineo', '1/2.8" Starvis CMOS Starlight', 'SIM', '4,8 a 120 mm', 'H: 59,2° - 2,4° | V: 32° - 2,1°', '25x', '16x', 'Sim', 'titulineo', 'H.265 / H.264H / H.264 / H.264B / MJPEG', '2MP / 1.3MP / 1MP / D1 / CIF', 'BLC / HLC / WDR (120 db)', '-', 'Detecção de Face / Linha Virtual / Cerca Virtual / Objeto Aband. Retir. / Mapa de Calor', 'Sim', 'titulineo', '1 entrada | 1 saída', 'G.711A / G.711Mu / G.726 / AAC / MPEG2-Layer2 / G.722.1 / G.729', 'titulineo', 'RJ45 (10/100 Base-T)', 'Intelbras DDNS, DDNS No-IP®, DynDNS®', '48 Mbps', '20', 'Sim', 'Sim', 'titulineo', 'Cartão micro-SD de até 128 GB (vendido separadamente) e FTP', '2 Entradas | 1 Saída', 'Não', '24 Vac / 1,5 A (± 10%); PoE+ (802.3at)', '< 23 W', 'IP66'],
        ['VHD3120SD', '<img class="img3" src="../HTML/img/vhd3115sd.png">', 'titulineo', 'VHD 3120 SD', 'titulineo','1/2.8" 1 MP CMOS - STARVIS™', 'Não', '5.3 a 106 mm', 'H: 61° - 3,75° | V: 32° - 2°', '20x', '4x', 'Não', 'titulineo', '-', '1MP / Analógico (600TVL)', 'BLC / HLC / WDR', '-', '-', '-', 'titulineo', 'Não', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', '24 Vac / 1,5A (± 10%)', '< 19 W', 'IP66'],
        ['VHD3115SD', '<img class="img3" src="../HTML/img/vhd3115sd.png">', 'titulineo', 'VHD 3115 SD', 'titulineo','1/3" 1 MP CMOS', 'Não', '5.1 a 76.5 mm', 'H: 60,7° - 3,9° | V: 32° - 2°', '15x', '4x', 'Não', 'titulineo', '-', '1MP', 'BLC / HLC / WDR', '-', '-', '-', 'titulineo', 'Não', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', '24 Vac / 1,5A (± 10%)', '< 16 W', 'IP66'],
        ['VHD5020SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VHD 5020 SD IR', 'titulineo','1/2,8" Exmor CMOS', 'Não', '4.7 a 94 mm', 'H: 54,1 ° - 3,2°', '20x', '10x', 'Sim', 'titulineo', '-', '2MP', 'BLC', '-', '-', '-', 'titulineo', '1 entrada', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', '24 Vac / 3A (± 10%)', '< 25 W', 'IP66'],
        ['VHD5130SD', '<img class="img3" src="../HTML/img/vhd5230sd.png">', 'titulineo', 'VHD 5130 SD', 'titulineo','1/2.8" 1 MP CMOS - STARVIS™', 'SIM', '4.5 a 135 mm', 'H: 60° - 32,5° | V: 35° - 1,5°', '30x', '4x', 'Não', 'titulineo', '-', '1MP / Analógico (600TVL)', 'BLC / HLC / WDR', '-', '-', '-', 'titulineo', '1 entrada', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', '24 Vac / 3A (± 10%)', '< 20 W', 'IP67 e IK10'],
        ['VHD5205SD', '<img class="img3" src="../HTML/img/vhd5205sd.png">', 'titulineo', 'VHD 5205 SD', 'titulineo','1/2.7" 2 MP CMOS', 'Não', '2.7 a 11 mm', 'H: 121° - 25° | V: 62° - 14°', '5x', '4x', 'Não', 'titulineo', '-', '2MP', 'BLC / HLC / WDR', '-', '-', '-', 'titulineo', 'Não', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', 'Não', 'Não', 'DC 12 V / 510 mA (± 10%)', '< 6,1 W', 'IP66 e IK10'],
        ['VHD5220SD', '<img class="img3" src="../HTML/img/vhd5230sd.png">', 'titulineo', 'VHD 5220 SD', 'titulineo','1/2.8" 1 MP CMOS - STARVIS™ (Starlight)', 'SIM', '5,3 a 106 mm', 'H: 66,5° - 4.62° | V: 41° - 2,72°', '20x', '4x', 'Não', 'titulineo', '-', '2MP / Analógico (600TVL)', 'BLC / HLC / WDR', '-', '-', '-', 'titulineo', '1 entrada', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', 'DC 12 V / 5 A (± 10%)', '< 60 W', 'IP67'],
        ['VHD5225SDIR', '<img class="img3" src="../HTML/img/vhd5225sdir.png">', 'titulineo', 'VHD 5225 SD IR', 'titulineo','1/2,8" 2 MP CMOS - STARVIS', 'SIM', '4.8 a 120mm', 'H: 65, 2° - 2, 7° | V: 37, 7° - 1, 6°', '25x', '4x', 'Sim', 'titulineo', ' - ', '2MP', 'BLC / HLC / WDR', ' - ', ' - ', ' - ', 'titulineo', '1 entrada', ' - ', 'titulineo', ' - ', ' - ', ' - ', ' - ', ' - ', ' - ', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', 'DC 12 V / 3 A(± 10 %)', ' < 20 W', 'IP66'],
        ['VHD5230SD', '<img class="img3" src="../HTML/img/vhd5230sd.png">', 'titulineo', 'VHD 5230 SD','titulineo', '1/2,8" 2 MP CMOS', 'SIM', '4.5m a 135mm', 'H: 60° - 2° | V: 34° - 1°', '30x', '4x', 'Não', 'titulineo', '-', '2MP', 'BLC', '-', '-', '-', 'titulineo', '1 entrada', '-', 'titulineo', '-', '-', '-', '-', '-', '-', 'titulineo', 'DVR', '2 Entradas | 1 Saída', 'Não', '24 Vac / 3A (± 10%)', '< 20 W', 'IP67 e IK10'],];		
        
var table = $('#tabela tr');
    var ID = $(elemento).attr("id").replace("r", "");
      if ($(elemento).is(':checked')) {
          var content = $("#" + ID).clone();
          var content2 = $("#i" + ID).clone();
          $("#texto" + ID).append(content);
          $("#indice").append(content2);
        for (var i=0; i<tb.length; i++) {
            if (tb[i][0] == ID){
                tb = tb[i]
            };
        };
        for(var i=0; i<table.length; i++){
            var row = table[i];
            if (tb[i+1] == 'titulineo'){
                $(row).find('td').attr('colspan', $(row).prev().find('td').length);
            }
            else{
                $(row).append('<td id="' + ID + i + '">' + tb[i + 1] + '</td>');
            }				
        };
    }
    else{
        $("#i" + ID + " span").each(function(){
              $(elemento).html("." + $(elemento).text().split(".")[1]);
          });
        $("#texto #" + ID).remove();   
        $("#texto #i" + ID).remove();
        for (var i=0; i<tb.length; i++) {
            if (tb[i][0] == ID){
                tb = tb[i]
            };
        };
        for(var i=0; i<table.length; i++){
            var row = table[i];
            if (tb[i+1] == 'titulineo'){
                $(row).find('td').attr('colspan', $(row).prev().find('td').length);
            }
            $('#' + ID + i).remove();
        };
    }
}

function labeling(){
    $(".ind1").each(function(){
        $(this).html($(this).prevAll('.ind0').length + 1 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind2").each(function(){
        $(this).html($(this).parent().prevAll('.ind0').length + "." + $(this).text().split(".")[1]);
    });
    $(".ind3").each(function(){
        $(this).html($(this).parent().prevAll('.ind0').length + 1 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind4").each(function(){
        $(this).html($(this).parent().parent().prevAll('.ind0').length + 1 + "." + $(this).text().split(".")[1]);
    });
    $(".ind5").each(function(){
        $(this).html($("#indice .ind0").length + 1 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind6").each(function(){
        $(this).html($("#indice .ind0").length + 2 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind7").each(function(){
        $(this).html($("#indice .ind0").length + 3 + " -" + $(this).text().split("-")[1]);
    });
}

$(function(){
    $('.btn').change(function(){
        hideit($(this));
        labeling();
    });
    var widt = $("aside").css("width");
    var widt2 = $("#inputsimg2").css("width");
    var widt3 = widt.replace("px", "") / 2 - widt2.replace("px", "") / 2;
});

$('#svg').click(function() {
    $("aside").toggleClass(".active")
    if($("aside").hasClass(".active") == false){
        $("aside").css("transform", "translateY(-" + $("body").height() + "px)");
        $("#texto").css("display", "block")
    };
    if($("aside").hasClass(".active") == true){
        $("aside").css("transform", "translateY(0px)");
        setTimeout(function(){
            $("#texto").css("display", "none")
        },600);
    };
});

$('#inputsimg2').click(function () {
    savePDF(document.querySelector('#texto'));
});