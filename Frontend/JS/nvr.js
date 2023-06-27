function hideit(elemento) {

    var tb = [
        /*Série 1000*/
        ['iNVD1016', '<img class="img3" src="../HTML/img/.png">', 'titulineo', 'iNVD 1016', 'titulineo', '16', 'titulineo', 'H.265+/H.265/H.264+/H.264/MJPEG', '8MP(4K), 5MP, 4MP, 3MP, 2MP (Full HD/1080p),1.3MP, 1MP(HD/720p)', '8MP (4K), 5MP, 4MP, 3MP, 2MP (Full HD/1080p), 1MP (HD/720p), D1 e CIF todos em até 30 FPS', 'Não', '1 HDMI e 1 VGA', 'Sim', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 porta RJ45 (10/100/1000Mbps)', 'DynDNS®, No-IP® e Intelbras DDNS®', 'Sim', 'Sim', 'Sim', '216Mbps Sem IVS /108 Mbps Com IVS', '128', 'Não', 'Sim', 'Não','titulineo', 'Não', '1', '-', 'Gerador de Senha / E-mail Cadastrado', '10W'],
        ['NVD1304', '<img class="img3" src="../HTML/img/nvd1316.png">', 'titulineo', 'NVD 1304', 'titulineo', '4', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF', '6MP, 5MP, 4MP, 3MP, 2MP (Full HD/1080p), 1MP (HD/720p), D1, CIF todos ematé 30 frames', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Não', '60 Mbps', '128', 'Não', 'Sim', 'Não','titulineo', 'Não', '1', '12TB', 'Gerador de Senha / E-mail Cadastrado', '2.57W'],
        ['NVD1308', '<img class="img3" src="../HTML/img/nvd1316.png">', 'titulineo', 'NVD1308', 'titulineo', '8', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '6MP, 5MP ,4MP ,3MP ,2MP (Full HD/1080p), 1MP(HD/720p), D1,CIF', '6MP,5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Não', '60 Mbps', '128', 'Não', 'Sim', 'Não', 'titulineo', 'Não', '1', '12TB', 'Gerador de Senha / E-mail Cadastrado', '2.57W'],
        ['NVD1316', '<img class="img3" src="../HTML/img/nvd1316.png">', 'titulineo', 'NVD 1316', 'titulineo', '16', 'titulineo', 'H.265/H.264', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080p), 1MP(HD / 720p), D1, CIF todos em até 30 frames','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 porta RJ45 (10/100/1.000 Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Sim', '140 Mbps', '128', 'Não', 'Sim', 'Não', 'titulineo', 'Não', '1', '12TB', 'Gerador de Senha / E-mail Cadastrado', '3W '],
        ['NVD1232', '<img class="img3" src="../HTML/img/nvd1232.png">', 'titulineo', 'NVD 1232', 'titulineo', '32', 'titulineo', 'H.265/H.264', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080p), 1MP(HD / 720p), D1 ,CIF todos em até 30 frames','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 porta RJ45 (10/100/1.000 Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Não', 'Sim', 'Sim', '140 Mbps', '128', 'Não', 'Sim', 'Não', 'titulineo', 'Não', '2', '12TB', 'Gerador de Senha / E-mail Cadastrado', '3W'],
        ['NVD1408', '<img class="img3" src="../HTML/img/nvd1408.png">', 'titulineo', 'NVD 1408', 'titulineo', '8', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080p), 1MP(HD / 720p), D1, CIF todos em até 30 frames','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 portas RJ45 (10/100Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','88 Mbps', '128','Não','Sim','Não','titulineo','Não','1','14TB','E-mail, Perguntas e Botão de Reset', '<10W'],
        ['NVD1408P', '<img class="img3" src="../HTML/img/nvd1408.png">', 'titulineo', 'NVD 1408 P', 'titulineo', '8', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080p), 1MP(HD / 720p), D1, CIF todos em até 30 frames','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 portas RJ45 (10/100Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','88 Mbps', '128','Não','Sim','Sim','titulineo','Não','1','14TB','E-mail, Perguntas e Botão de Reset', '< 10W'],
        ['NVD1404P', '<img class="img3" src="../HTML/img/nvd1408.png">', 'titulineo', 'NVD 1404 P', 'titulineo', '4', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080p), 1MP(HD / 720p),D1, CIF todos em até 30 frames','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 portas RJ45 (10/100Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','88 Mbps', '128','Não','Sim','Sim','titulineo','Não','1','14TB','E-mail, Perguntas e Botão de Reset', '< 10W'],
        ['NVD1404', '<img class="img3" src="../HTML/img/nvd1408.png">', 'titulineo', 'NVD 1404', 'titulineo', '4', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K),6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080p), 1MP(HD / 720p), D1, CIF todos em até 30 frames','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 portas RJ45 (10/100Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','88 Mbps', '128','Não','Sim','Não','titulineo','Não','1','14TB','E-mail, Perguntas e Botão de Reset', '< 10W'],
        
        /*Série 3000*/
        ['NVD3016P', '<img class="img3" src="../HTML/img/nvd3016p.png">', 'titulineo', 'NVD 3016 P', 'titulineo', '16', 'titulineo', 'H.264/MJPEG', '-', '5MP,4MP,3MP,2MP(Full HD/1080p),1MP(HD/720p),D1,CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 porta RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Não','Sim','Não','144 Mbps', '10','Não','Sim','Sim','titulineo','Sim','2','8TB','Gerador de Senha','25W'],
        ['NVD3016', '<img class="img3" src="../HTML/img/nvd3016p.png">', 'titulineo', 'NVD 3016', 'titulineo', '16', 'titulineo', 'H.264/MJPEG', '-', '5MP,4MP,3MP,2MP(Full HD/1080p),1MP(HD/720p),D1,CIF', ' Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 porta RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Não','Sim','Não','144 Mbps', '10','Não','Sim','Não','titulineo','Sim','2','8TB','Gerador de Senha','20W'],
        ['NVD3204P', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3204P', 'titulineo', '4', 'titulineo', 'H.265/ H.265+/H.264/H.264+', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Sim', '140 Mbps', '128', 'Não', 'Sim', 'Sim', 'titulineo', 'Não', '1', '12TB', 'E-mail, Perguntas e Botão de Reset','5.3W'],
        ['NVD3208P', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3208 P', 'titulineo', '8', 'titulineo', 'H.265/H.264','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','Não','1 HDMI e 1 VGA','Não','Não','titulineo','1 Entrada / 1 Saída','titulineo','1 portas RJ45 (10 / 100 / 1.000 Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','104 Mbps', '128','Não','Sim','Sim','titulineo','Não','1','12TB','E-mail, Perguntas, Botão de Reset, SMS e Gerador de Senha','5.8W'],
        ['NVD3116', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3116', 'titulineo', '16', 'titulineo', 'H.265/H.264/MJPEG', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Sim', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Sim','Sim','Sim','300 Mbps', '128','Não','Sim','Não','titulineo','Sim','2','12TB','E-mail, SMS e Perguntas','7W'],
        ['NVD3116P', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3116 P', 'titulineo', '16', 'titulineo', 'H.265/H.264/MJPEG', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Sim', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Sim','Sim','Sim','300 Mbps', '128','Não','Sim','Sim','titulineo','Sim','2','12TB','E-mail, SMS e Perguntas','14W'],
        ['NVD3108P', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3108 P', 'titulineo', '8', 'titulineo', 'H.264/H.264H/H264B/MJPEG', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Sim', '80 Mbps', '128', 'Não', 'Sim', 'Sim', 'titulineo', 'Não', '1', '10TB', 'Gerador de Senha', '5W'],
        ['NVD3316', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3316', 'titulineo', '16', 'titulineo', 'H.265+/H.265/H.264+/H.264', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 porta RJ45 (10/100Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Sim', '140 Mbps', '128', 'Não', 'Sim', 'Não', 'titulineo', 'Não', '1', '14TB', 'E-mail, SMS e Perguntas',' < 10W'],
        ['NVD3316P', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3316P', 'titulineo', '16', 'titulineo', 'H.265+/H.265/H.264+/H.264', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Sim','Sim','Sim', '220 Mbps', '128','Não','Sim','Sim','titulineo','Sim','2','18TB','E-mail, SMS e Perguntas','<10W'],
        ['NVD3316Plus', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3316 Plus', 'titulineo', '16', 'titulineo', 'H.265+/H.265/H.264+/H.264', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Sim','Sim','Sim','220 Mbps', '128','Não','Sim','Não','titulineo','Sim','2','14TB','E-mail, SMS e Perguntas','<10W'],
        ['NVD3308P', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3308P', 'titulineo', '8', 'titulineo', 'H.265+/H.265/H.264+/H.264', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 porta RJ45 (10/100Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Sim', 'Sim', 'Sim', '160 Mbps', '128', 'Não', 'Sim', 'Sim', 'titulineo', 'Não', '1', '14TB', 'E-mail, SMS e Perguntas',' < 10W'],
        ['NVD3332', '<img class="img3" src="../HTML/img/nvd3204.png">', 'titulineo', 'NVD 3332', 'titulineo', '32', 'titulineo', 'H.265+/H.265/H.264+/H.264', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Não', '1 HDMI e 1 VGA', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '1 portas RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Sim','Sim','Sim','200 Mbps', '128','Não','Sim','Não','titulineo','Sim','2','14TB','E-mail, SMS e Perguntas','<10W'],

        /*Série 5000*/
        ['iNVD5032','<img class="img3" src="../HTML/img/invd5032.png" > ','titulineo','iNVD 5032','titulineo','32','titulineo','H.265 / H.265 + /H.264/H.264 + /MJPEG','12MP, 8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','12MP,8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','Não','1 HDMI e 1 VGA','Sim','Não','titulineo','1 Entrada / 1 Saída','titulineo','2 portas RJ45 (10 / 100 / 1.000 Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','200 Mbps sem IVS / 80 Mbps com IVS ','128','Não','Sim','Não','titulineo','Sim','4','12TB','E-mail, Perguntas, Gerador de senhas e SMS','7W'],
        ['iNVD5132','<img class="img3" src="../HTML/img/invd5132.png" > ','titulineo','iNVD 5132','titulineo','32','titulineo','H.265 / H.265 + /H.264/H.264 + /MJPEG','16MP, 12MP, 8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','16MP, 12MP, 8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','SIM','1 HDMI e 1 VGA','Sim','Não','titulineo','1 Entrada / 1 Saída','titulineo','2 portas RJ45 (10 / 100 / 1.000 Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','256 Mbps sem IVS / 160 Mbps com IVS ','128','Não','Sim','Não','titulineo','Sim','4','18TB','E-mail, Perguntas, Gerador de senhas e SMS','8W'],
        ['NVD5124', '<img class="img3" src="../HTML/img/nvd5124.png">', 'titulineo', 'NVD 5124', 'titulineo', '24', 'titulineo', 'H.265/ H.265+/H.264/MJPEG', '12MP,8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', '12MP, 8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Sim','2 HDMI e 2 VGA','Sim','Sim','titulineo','1 Entrada / 2 Saída','titulineo','2 portas RJ45 (10 / 100 / 1.000 Mbps)','DynDNS, No-IP e Intelbras DDNS','Não','Sim','Sim','560 Mbps', '128','Não','Sim','Não','titulineo','Sim','4','12TB','E-mail, Perguntas, Botão de Reset e SMS','17W'],
        ['NVD50164K', '<img class="img3" src="../HTML/img/nvd5016.png">', 'titulineo', 'NVD 5016 4K', 'titulineo', '16', 'titulineo', 'H.265/H.264/MJPEG', '-', '12MP,8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD/720P), D1, CIF', 'Sim','2 HDMI e 1 VGA','Não','Sim','titulineo','1 Entrada / 1 Saída','titulineo','2 portas RJ45 (10 / 100 / 1.000 Mbps)','DynDNS e No-IP','Não','Sim','Não','176 Mbps','10','Não','Sim','Não','titulineo','Sim','4','8 TB','Gerador de senhas','17W'],

        /*Série 7000*/
        ['NVD7132', '<img class="img3" src="../HTML/img/nvd7132.png">', 'titulineo', 'NVD 7132', 'titulineo', '32', 'titulineo', 'H.265/H.264/MJPEG', '8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF','8MP(4K),6MP, 5MP, 4MP, 3MP,2MP(Full HD / 1080p), 1MP(HD / 720p), D1, CIF','Não','1 HDMI e 1 VGA','Sim','Não','titulineo','1 Entrada / 1 Saída','titulineo','2 portas RJ45 (10/100/1.000 Mbps)', 'DynDNS, No-IP e Intelbras DDNS', 'Não', 'Sim', 'Não', '300 Mbps', '128', 'Não', 'Sim', 'Não', 'titulineo', 'Sim', '8', '12TB', 'E-mail, SMS e Perguntas','12W'],
        ['NVD7032', '<img class="img3" src="../HTML/img/nvd7032.png">', 'titulineo', 'NVD 7032', 'titulineo', '32', 'titulineo', 'H.265/MPEG4/MJPEG', '-', '5MP, 4MP, 3MP, 2MP(Full HD/1080p), 1MP(HD/720p), D1, CIF', 'Não', '1 HDMI, 1 VGA e 1 BNC', 'Não', 'Não', 'titulineo', '1 Entrada / 1 Saída', 'titulineo', '2 portas RJ45 (10/100/1.000 Mbps)','DynDNS, No - IP e Intelbras DDNS','Não','Sim','Não','184 Mbps','10','Não','Sim','Não','titulineo','Sim','4','12TB','E-mail, Perguntas, Gerador de senhas e SMS','7W'],
        ['iNVD7032','<img class="img3" src="../HTML/img/invd7032.png">','titulineo','iNVD 7032','titulineo','32','titulineo','H.265 / H.265 + /H.264/H.264 + /MJPEG','16MP, 12MP, 8MP (4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD/1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','16MP, 12MP, 8MP(4K), 6MP, 5MP, 4MP, 3MP, 2MP(Full HD / 1080P), 1.3MP, 1MP(HD / 720P), D1, CIF','SIM','1 HDMI e 1 VGA','Sim','Não','titulineo','1 Entrada / 1 Saída','titulineo','2 portas RJ45 (10 / 100 / 1.000 Mbps)','DynDNS, No-IP e Intelbras DDNS','Sim','Sim','Sim','256 Mbps sem IVS / 160 Mbps com IVS ','128','Não','Sim','Não','titulineo','Sim','8','18TB','E-mail, Perguntas, Gerador de senhas e SMS','8W'],
        
        ];
    var table = $('#tabela tr');
    var ID = $(elemento).attr("id").replace("r", "");
    if ($(elemento).is(':checked')) {
        var content = $("#" + ID).clone();
        var content2 = $("#i" + ID).clone();
        $("#texto" + ID).append(content);
        $("#indice").append(content2);
        for (var i = 0; i < tb.length; i++) {
            if (tb[i][0] == ID) {
                tb = tb[i]
            };
        };
        for (var i = 0; i < table.length; i++) {
            var row = table[i];
            if (tb[i + 1] == 'titulineo') {
                $(row).find('td').attr('colspan', $(row).prev().find('td').length);
            }
            else {
                $(row).append('<td id="' + ID + i + '">' + tb[i + 1] + '</td>');
            }
        };
    }
    else {
        $("#i" + ID + " span").each(function () {
            $(elemento).html("." + $(elemento).text().split(".")[1]);
        });
        $("#texto #" + ID).remove();
        $("#texto #i" + ID).remove();
        for (var i = 0; i < tb.length; i++) {
            if (tb[i][0] == ID) {
                tb = tb[i]
            };
        };
        for (var i = 0; i < table.length; i++) {
            var row = table[i];
            if (tb[i + 1] == 'titulineo') {
                $(row).find('td').attr('colspan', $(row).prev().find('td').length);
            }
            $('#' + ID + i).remove();
        };
    }
}

function labeling() {
    $(".ind1").each(function () {
        $(this).html($(this).prevAll('.ind0').length + 1 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind2").each(function () {
        $(this).html($(this).parent().prevAll('.ind0').length + "." + $(this).text().split(".")[1]);
    });
    $(".ind3").each(function () {
        $(this).html($(this).parent().prevAll('.ind0').length + 1 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind4").each(function () {
        $(this).html($(this).parent().parent().prevAll('.ind0').length + 1 + "." + $(this).text().split(".")[1]);
    });
    $(".ind5").each(function () {
        $(this).html($("#indice .ind0").length + 1 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind6").each(function () {
        $(this).html($("#indice .ind0").length + 2 + " -" + $(this).text().split("-")[1]);
    });
    $(".ind7").each(function () {
        $(this).html($("#indice .ind0").length + 3 + " -" + $(this).text().split("-")[1]);
    });
}

$(function () {
    $('.btn').change(function () {
        hideit($(this));
        labeling();
    });
    var widt = $("aside").css("width");
    var widt2 = $("#inputsimg2").css("width");
    var widt3 = widt.replace("px", "") / 2 - widt2.replace("px", "") / 2;
});

$('#svg').click(function () {
    $("aside").toggleClass(".active")
    if ($("aside").hasClass(".active") == false) {
        $("aside").css("transform", "translateY(-" + $("body").height() + "px)");
        $("#texto").css("display", "block")
    };
    if ($("aside").hasClass(".active") == true) {
        $("aside").css("transform", "translateY(0px)");
        setTimeout(function () {
            $("#texto").css("display", "none")
        }, 600);
    };
});

$('#inputsimg2').click(function () {
    savePDF(document.querySelector('#texto'));
});