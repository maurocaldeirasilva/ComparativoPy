function hideit(elemento){
		
    var tb = [  ['iM3', '<img class="img3" src="../HTML/img/iM3.png">', 'titulineo', 'IM3, iM3 c/micro-SD 32 GB, iM3 Black, iM3 Duo', 'titulineo','1/2,7”de 2MP', 'Automático', '2,8 mm', '112° H, 58° V, 131° D', '131°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480', 'Adaptável 30 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.265', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:17 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 130 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,1 W', 'Não Possui', '102,7 g'],
                ['iM3c', '<img class="img3" src="../HTML/img/iM4.png">', 'titulineo', 'IM3 C, iM3 C Black','titulineo','1/2,7”de 2MP', 'Automático', '2,8 mm', '112° H, 58° V, 131° D', '131°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480', 'Adaptável 20 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:15 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,1 W', 'Sim (Rede Local)', '102,7 g'],
                  ['iM4', '<img class="img3" src="../HTML/img/iM4.png">', 'titulineo', 'IM4, iM4 c/micro-SD 32 GB', 'titulineo','1/2,7”de 2MP', 'Automático', '3,6 mm', '93° H, 48° V, 115° D', '115°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480','Adaptável 30 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.265', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 – 1 porta de 100 Mbps', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:17 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 130 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi) / Cabo Ethernet', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,5 W', 'Não Possui', '238 g'], 
                  ['iM4c', '<img class="img3" src="../HTML/img/iM4.png">', 'titulineo', 'IM4 C, iM4 C c/micro-SD 32 GB','titulineo','1/2,7”de 2MP', 'Automático', '3,6 mm', '93° H, 48° V, 115° D', '115°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480','Adaptável 20 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 – 1 porta de 100 Mbps', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:15 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi) / Cabo Ethernet', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,5 W','Sim (Rede Local)', '219 g'],
                  ['iM5s', '<img class="img4" src="../HTML/img/iM5 S.png">', 'titulineo', 'iM5 S, iM5 S c/micro-SD 32 GB','titulineo', '1/2,8”de 2MP', 'Automático', '2,8 mm', 'H: 102°, V: 54°, D: 120°', '120°', '30 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480','Adaptável 30 fps', 'Automático', '--', 'Digital automático', '16x', 'titulineo', 'H.265', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 – 1 porta de 100 Mbps', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', '64/128 bits WEP, WPA/WPA2 , WPA-PSK/ WPA2-PSK', 'b:17 dBm, g:15 dBm, n:15 dBm', '11b: 11 Mbps,11g: 54 Mbps,11n: 150 Mbps', '1,39 dBi', 'Modo AP (Wi-Fi) / Cabo Ethernet', 'titulineo', 'IP67', 'Ambiente externo', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '--', '-30 °C a 60 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 12 V/1 A ou 12,8 V/1 A', '< 3,5 W', 'Sim (Rede Local)', '600 g'],
                  ['iM5sc', '<img class="img4" src="../HTML/img/iM5 S.png">', 'titulineo', 'iM5 SC, iM5 SC c/micro-SD 32 GB','titulineo', '1/2,8”de 2MP', 'Automático', '2,8 mm', 'H: 98°, V: 54°, D: 120°', '120°', '30 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480','Adaptável 20 fps', 'Automático', '--', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 – 1 porta de 100 Mbps', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', '64/128 bits WEP, WPA/WPA2 , WPA-PSK/ WPA2-PSK', 'b:17 dBm, g:15 dBm, n:15 dBm', '11b: 11 Mbps,11g: 54 Mbps,11n: 150 Mbps', '1,39 dBi', 'Modo AP (Wi-Fi) / Cabo Ethernet', 'titulineo', 'IP67', 'Ambiente externo', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '--', '-30 °C a 60 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 12 V/1 A ou 12,8 V/1 A', '< 3,5 W','Sim (Rede Local)', '600 g'],
                  ['iM5m', '<img class="img4" src="../HTML/img/iM5+FC.png">', 'titulineo', 'iM5+ Full Color','titulineo', '1/2,9” 2MP CMOS', 'Automático', '2,8 mm', 'H: 102°, V: 54°, D: 120°', '120°', '30 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480','Adaptável 20 fps', 'Automático', '--', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 – 1 porta de 100 Mbps', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', '64/128 bits WEP, WPA/WPA2 , WPA-PSK/ WPA2-PSK', 'b:17 dBm, g:15 dBm, n:15 dBm', '11b: 11 Mbps,11g: 54 Mbps,11n: 150 Mbps', '1,39 dBi', 'Modo AP (Wi-Fi) / Cabo Ethernet', 'titulineo', 'IP67', 'Ambiente externo', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '--', '-30 °C a 60 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 12 V/1 A ou 12,8 V/1 A', '< 7,5 W', 'Sim (Rede Local)', '841 g'],
                  ['iM7', '<img class="img4" src="../HTML/img/iM7.png">', 'titulineo', 'iM7 Full Color', 'titulineo','1/2.9” 2 MP CMOS', 'Automático', '3,6 mm', 'H: 86°, V: 45°, D: 105°', '105°', '20 metros', 'Automático (Ajustável)', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480','Adaptável 20 fps', 'Automático', '--', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 – 1 porta de 100 Mbps', 'IEEE802.11b/g/n', '2,4 GHz ~ 2,4835 GHz', '20 / 40 MHz', '64/128 bit WEP, WPA/WPA2, WPA-PSK/ WPA2-PSK', 'b:17 dBm, g:15 dBm, n:15 dBm', '11b: 11 Mbps,11g: 54 Mbps,11n: 150 Mbps', '1,79 dBi', 'Modo AP (Wi-Fi) / Cabo de rede', 'titulineo', 'IP66', 'Interno e Externo', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '--', '-20 °C a 50 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 12 V/1 A', '< 6,2 W', 'Sim (Rede Local)', '565 g'],
                  ['iMX', '<img class="img3" src="../HTML/img/iMX.png">', 'titulineo', 'iMX, iMX Black, iMX c/micro-SD 32 GB','titulineo', '1/2,7”de 2MP', 'Automático', '2,8 mm', '112° H, 58° V, 131° D', '131°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480', 'Adaptável 30 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.265', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:17 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 130 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,1 W', 'Sim (Rede Local)', '102,7 g'],
                  ['iMXc', '<img class="img3" src="../HTML/img/iMX.png">', 'titulineo', 'iMX C, iMX C Black','titulineo', '1/2,7”de 2MP', 'Automático', '2,8 mm', '112° H, 58° V, 131° D', '131°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480', 'Adaptável 20 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:15 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,1 W', 'Sim (Rede Local)', '102,7 g'],
                  ['iME-500-FC', '<img class="img3" src="../HTML/img/ime500.png">', 'titulineo', 'iME-500-FC' ,'titulineo', '1/3" de 2MP CMOS', 'Automático', '2,8 mm', '97° H, 52° V, 114° D', '131°', '20 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480', 'Adaptável 20 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:15 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'IP65', 'Ambiente interno e externo', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '-', '-20 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 5,8 W', 'Sim (Rede Local)', '-'],
                ['iME-360', '<img class="img3" src="../HTML/img/iME360.png">', 'titulineo', 'iME 360', 'titulineo','1/2,8”de 2MP', 'Automático', '3,6 mm', '93° H, 48° V, 115° D', '115°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '5 metros', 'titulineo', 'Full HD 1080p (1920 × 1080)', 'VGA - 640 X 480', 'Adaptável 30 fps', 'Automático', 'Automático', 'Digital automático', '16x', 'titulineo', 'H.265', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/ n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:17 dBm, g:17 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 130 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,5 W', 'Sim (Rede Local)', '219 g'],
                ['iM1', '<img class="img3" src="../HTML/img/imx1.png">', 'titulineo', 'iM1', 'titulineo','1/2,8”de 1MP', 'Automático', '2,6 mm', '93° H, 50° V, 114° D', '114°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', 'HD 720p (1280 × 720)', 'VGA - 640 X 480', 'Adaptável 20 fps', 'Automático', 'Automático', 'Digital automático', '8x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/ n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:18 dBm, g:15 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,2 W', 'Sim (Rede Local)', '64,4 g'],
                ['iMX1', '<img class="img3" src="../HTML/img/imx1.png">', 'titulineo', 'iMX1', 'titulineo','1/2,8”de 1MP', 'Automático', '2,6 mm', '93° H, 50° V, 114° D', '114°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', 'HD 720p (1280 × 720)', 'VGA - 640 X 480', 'Adaptável 20 fps', 'Automático', 'Automático', 'Digital automático', '8x', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/ n', '2,4 GHz', '20 / 40 MHz', 'WPA, WPA-PSK, WPA2, WPA2- PSK, WEP 64 bits & 128 bits', 'b:18 dBm, g:15 dBm, n:15 dBm', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '2,84 dBi', 'Modo AP (Wi-Fi)', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 256 GB)', 'Ajustável', '95 dB', '-10 °C a 45 °C, umidade menor que 95%', 'Entrada: 100Vac a 240Vac Saída: 5 V/1 A', '< 3,2 W', 'Sim (Rede Local)', '64,4 g'],
                
                /*IC*/
                ['iC3', '<img class="img3" src="../HTML/img/iC3.png">', 'titulineo', 'iC3', 'titulineo','1/4" HD Progressive Scan CMOS', 'Automático', '2,8 mm', '92° H, 111° D', '111°', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', '720p (1280 × 720)','-', 'Adaptável 25 fps', 'Automático', 'Automático', 'Digital automático', '-', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20MHz', '64/128 bit WEP, WPA/WPA2, WPA-PSK/WPA2-PSK', '-', '802.11b: 11 Mbps, 802.11g 54 Mbps, 802.11n 150 Mbps', '1,7 dBi interna', '-', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 128 GB)', 'Não', '-', '-10 °C a 50 °C, umidade menor que 95%', 'DC 5 V ±10%', '< 3 W', 'Não Possui', '108 g'],
                ['iC4', '<img class="img3" src="../HTML/img/iC4.png">', 'titulineo', 'iC4', 'titulineo','1/4" HD Progressive Scan CMOS', 'Automático', '4mm', '90° D', '-', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', '720p (1280 × 720)', '-','Adaptável 25 fps', 'Automático', 'Automático', 'Digital automático', '-', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'Ethernet RJ45 10/100M', 'IEEE802.11b/g/n', '2,4 GHz', '20MHz', '64/128 bit WEP, WPA/WPA2, WPA-PSK/WPA2-PSK', '-', 'b: 11Mbps, g :54Mbps, n :135Mbps', '2 dBi interna', '-', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 128 GB)', 'Não', '-', '-10 °C a 50 °C, umidade menor que 95%', 'DC 5 V ±10%', '< 7 W', 'Não Possui', '256 g'],
                ['iC5', '<img class="img3" src="../HTML/img/iC5.png">', 'titulineo', 'iC5', 'titulineo','1/3” HD Progressive Scan CMOS', 'Automático', '2,8mm', '114° D, 92° H', '-', '30 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', '720p (1280 × 720)', '-','Adaptável 25 fps', 'Automático', 'Automático', 'Digital automático', '-', 'titulineo', 'H.264', 'Adaptável', '-', 'titulineo', 'n/a', 'IEEE802.11b/g/n', '2,4 GHz', '20MHz', '64/128 bit WEP, WPA/WPA2, WPA-PSK/WPA2-PSK', '-', '11b: 11 Mbps, 11g: 54 Mbps, 11n: 150 Mbps', '1,3 dBi interna', '-', 'titulineo', 'IP66', 'Ambiente externo', 'Cartão micro-SD (máx. 128 GB)', 'Não', '-', '-10 °C a 60 °C, umidade menor que 95%', 'DC 12 V ±10%', '< 5 W', 'Não Possui', '331 g'],
                ['iC7', '<img class="img3" src="../HTML/img/iC7.png">', 'titulineo', 'iC7s', 'titulineo','1/3” HD Progressive Scan CMOS', 'Automático', '4mm', '95° D', '-', '10 metros', 'Automático com filtro de IR', '0 lux (IR ligado)', '-', 'titulineo', '1080p (1920 ×','-','Adaptável 15 fps','Automático', 'Automático', 'Digital automático', '-', 'titulineo', 'H.264', 'Adaptável', 'AAC', 'titulineo', 'RJ45 10/100 M Autoadaptável', 'IEEE802.11b/g/n', '2,4 GHz', '20MHz', '64/128 bit WEP, WPA/WPA2, WPA-PSK/WPA2-PSK', '-', '-', '2,4 dBi interna', '-', 'titulineo', 'Não possui', 'Ambiente interno', 'Cartão micro-SD (máx. 128 GB)', 'Não', '-', '-10 °C a 55 °C, umidade menor que 95%', 'DC 5 V ±10%', '< 7 W', 'Não Possui', '220 g'],
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