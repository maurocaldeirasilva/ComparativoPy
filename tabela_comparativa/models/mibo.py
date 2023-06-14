###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class Mibo (models.Model):
    sensor = models.CharField(max_length=100, verbose_name=_('Sensor'))
    obturador = models.CharField(max_length=100, verbose_name=_('Obturador'))
    lente = models.CharField(max_length=100, verbose_name=_('Lente'))
    angulo_visao = models.CharField(max_length=100, verbose_name=_('Angulo de Visão'))
    campoo_visao = models.CharField(max_length=100, verbose_name=_('Campo de Visão'))
    alcence_ir = models.CharField(max_length=100, verbose_name=_('Alcance IR'))
    dia_noite = models.CharField(max_length=100, verbose_name=_('Dia e Noite'))
    sensibilidade = models.CharField(max_length=100, verbose_name=_('Sensibilidade'))
    alcance_audio = models.CharField(max_length=100, verbose_name=_('Alcance de Áudio'))
    resolucao = models.CharField(max_length=100, verbose_name=_('Resolução'))
    resolucao_eco = models.CharField(max_length=100, verbose_name=_('Resolução Eco'))
    taxa_quadros = models.CharField(max_length=100, verbose_name=_('Taxa de Quadros'))
    blc = models.CharField(max_length=100, verbose_name=_('BLC'))
    tresd_dnr = models.CharField(max_length=100, verbose_name=_('3D-DNR'))
    wdr = models.CharField(max_length=100, verbose_name=_('WDR'))
    zoom_digit = models.CharField(max_length=100, verbose_name=_('Zoom Digital'))
    comp_audio = models.CharField(max_length=100, verbose_name=_('Compressão de Áudio'))
    comp_video = models.CharField(max_length=100, verbose_name=_('Compressão de Vídeo'))
    rede_cabeada = models.CharField(max_length=100, verbose_name=_('Rede Cabeada'))
    padroes_wifi = models.CharField(max_length=100, verbose_name=_('Padrões Wi-Fi'))
    frequencia_wifi = models.CharField(max_length=100, verbose_name=_('Frequência Wi-Fi'))
    largura_banda = models.CharField(max_length=100, verbose_name=_('Largura de Banda'))
    seguranca = models.CharField(max_length=100, verbose_name=_('Segurança'))
    pot_transmissao = models.CharField(max_length=100, verbose_name=_('Potência de Transmissão'))
    taxa_transmissao = models.CharField(max_length=100, verbose_name=_('Taxa de Transmissão'))
    antena = models.CharField(max_length=100, verbose_name=_('Antena'))
    metodo_config = models.CharField(max_length=100, verbose_name=_('Método de Configuração'))
    grau_prot = models.CharField(max_length=100, verbose_name=_('Grau de Proteção'))
    ambiente_instalacao = models.CharField(max_length=100, verbose_name=_('Ambiente de Instalação'))
    armazenamento = models.CharField(max_length=100, verbose_name=_('Armazenamento'))
    ivs = models.CharField(max_length=100, verbose_name=_('IVS'))
    comp_simnext = models.CharField(max_length=100, verbose_name=_('Compatibilidade SimNext'))
    peso = models.CharField(max_length=100, verbose_name=_('Peso'))