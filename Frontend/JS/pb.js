function hideit(elemento){
		
    var tb = [  /*SÉRIE 1000*/
                ['VB1001WP', '<img class="img3" src="../HTML/img/vb1001wp.png">', 'titulineo', 'VB 1001 WP', 'titulineo' ,'1 RJ45', '1 BNC', 'NÃO','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p) e 200 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '1,1 A²','15W'],
                ['VB1004WP', '<img class="img3" src="../HTML/img/vb1004wp.png">', 'titulineo', 'VB 1004 WP', 'titulineo' ,'4 RJ45', '4 BNC', '1 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p) e 200 m (1080p) <br>Menu OSD/PTZ Dia: 300 m (720p) e 200 m (1080p) <br>Menu OSD/PTZ Noite: 170 m (720p) e 80 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '5 A²','80W'],
                ['VB1008WP', '<img class="img3" src="../HTML/img/vb1008wp.png">', 'titulineo', 'VB 1008 WP', 'titulineo' ,'8 RJ45', '8 BNC', '2 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p) e 200 m (1080p) <br>Menu OSD/PTZ Dia: 300 m (720p) e 200 m (1080p) <br>Menu OSD/PTZ Noite: 170 m (720p) e 80 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '5 A²','80W'],
                ['VB1016WP', '<img class="img3" src="../HTML/img/vb1016wp.png">', 'titulineo', 'VB 1016 WP', 'titulineo' ,'16 RJ45', '16 BNC', '4 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p) e 200 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '7,5 A²','105W'],
                ['VB1104WP', '<img class="img3" src="../HTML/img/vb1104wp.png">', 'titulineo', 'VB 1104 WP', 'titulineo' ,'4 RJ45', '4 BNC', '1 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '250 metros', 'Vídeo: 250 m (720p) e 200 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 200 m (1080p) <br>Menu OSD/PTZ Noite: 170 m (720p) e 80 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Dia: 250 m (720p) e 150 m (1080p) <br>Menu OSD/PTZ Noite: 150 m (720p) e 70 m (1080p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','12,8 Vdc', '3 A²','40W'],
                
                /*SÉRIE 3000*/
                ['VB3001WP', '<img class="img3" src="../HTML/img/vb3001wp.jpg">', 'titulineo', 'VB 3001 WP', 'titulineo' , '1 RJ45', '1 BNC', 'NÃO', '1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p) e 150 m (1080p)', 'Vídeo: 250 m (720p) e 150 m (1080p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','15W'],
                ['VB3004WP', '<img class="img3" src="../HTML/img/vb3004wp.jpg">', 'titulineo', 'VB 3004 WP', 'titulineo' , '4 RJ45', '4 BNC', '1 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '5 A²','70W'],
                ['VB3008WP', '<img class="img3" src="../HTML/img/vb3008wp.jpg">', 'titulineo', 'VB 3008 WP', 'titulineo' , '8 RJ45', '8 BNC', '2 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '5 A²','70W'],
                ['VB3016WP', '<img class="img3" src="../HTML/img/vb3016wp.jpg">', 'titulineo', 'VB 3016 WP', 'titulineo' , '16 RJ45', '16 BNC', '4 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','13,8 Vdc', '7,5 A²','105W'],
                ['VB3016', '<img class="img3" src="../HTML/img/vb3016.png">', 'titulineo', 'VB 3016', 'titulineo' , '16 RJ45', '16 BNC', '4 RJ45','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'SIM', 'titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO', 'NÃO'],
                ['VB3104WP', '<img class="img3" src="../HTML/img/vb3104wp.jpg">', 'titulineo', 'VB 3104 WP', 'titulineo' ,'4 RJ45', '4 BNC', '1 RJ45','1 P4 Macho', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '250 metros', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'SIM', 'titulineo', 'Menu OSD e PTZ', 'SIM', 'titulineo', '12,8 Vdc', '3 A²','40W'],

                /*SÉRIE 500*/
                ['VB500P', '<img class="img3" src="../HTML/img/vb500.png">', 'titulineo', 'VB 500 P', 'titulineo' ,'1 BNC', '1 Borne parafuso', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)', 'Vídeo: 250 m (720p), 100 m (1080p) e 120 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB500PG2', '<img class="img3" src="../HTML/img/vb500.png">', 'titulineo', 'VB 500 P G2', 'titulineo' ,'1 BNC', '1 Borne parafuso', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB501P', '<img class="img3" src="../HTML/img/vb501p.png">', 'titulineo', 'VB 501 P', 'titulineo' ,'1 BNC', '1 Borne parafuso', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB501PG2', '<img class="img3" src="../HTML/img/vb501p.png">', 'titulineo', 'VB 501 P G2', 'titulineo' ,'1 BNC', '1 Borne parafuso', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 120 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB502B', '<img class="img3" src="../HTML/img/vb502p.png">', 'titulineo', 'VB 502 B', 'titulineo' ,'1 BNC', '1 Borne pressão', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB502BG2', '<img class="img3" src="../HTML/img/vb502p.png">', 'titulineo', 'VB 502 B G2', 'titulineo' ,'1 BNC', '1 Borne pressão', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB503B', '<img class="img3" src="../HTML/img/vb503p.png">', 'titulineo', 'VB 503 B', 'titulineo' ,'1 BNC', '1 Borne pressão', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
                ['VB503BG2', '<img class="img3" src="../HTML/img/vb503p.png">', 'titulineo', 'VB 503 B G2', 'titulineo' ,'1 BNC', '1 Borne pressão', 'NÃO','NÃO', 'titulineo' ,'HDCVI/ AHD-M/ HDTVI/ Analógico (CVBS)', '400 metros', 'Vídeo: 300 m (720p), 200 m (1080p) e 120 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)', 'Vídeo: 250 m (720p), 150 m (1080p) e 100 metros (até 2160p)','SIM','titulineo', 'Menu OSD e PTZ','SIM', 'titulineo','NÃO', 'NÃO','NÃO'],
            ];
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