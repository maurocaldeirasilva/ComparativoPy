###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class SpeedDome(models.Model):
    sensor = models.CharField(max_length=100, verbose_name=_('Sensor'))
    starlight = models.CharField(max_length=100, verbose_name=_('Starlight'))
    dist_focal = models.CharField(max_length=100, verbose_name=_('Distância Focal'))
    ang_visao = models.CharField(max_length=100, verbose_name=_('Angulo de Visão'))
    zoom_optico = models.CharField(max_length=100, verbose_name=_('Zoom Óptico'))
    zoom_digital = models.CharField(max_length=100, verbose_name=_('Zoom Digital'))
    alcance_ir = models.CharField(max_length=100, verbose_name=_('Alcance IR'))
    compressao = models.CharField(max_length=100, verbose_name=_('Compressão'))
    resolucao = models.CharField(max_length=100, verbose_name=_('Resolução'))
    comp_luz_fundo = models.CharField(max_length=100, verbose_name=_('Compensação de Luz de Fundo'))
    dori = models.CharField(max_length=100, verbose_name=_('DORI'))
    ivs = models.CharField(max_length=100, verbose_name=_('IVS'))
    auto_tracking = models.CharField(max_length=100, verbose_name=_('Auto Tracking'))
    audio = models.CharField(max_length=100, verbose_name=_('Audio'))
    comp_audio = models.CharField(max_length=100, verbose_name=_('Compressão de Audio'))
    int_rede = models.CharField(max_length=100, verbose_name=_('Interface de Rede'))
    ddns = models.CharField(max_length=100, verbose_name=_('DDNS'))
    throughpout = models.CharField(max_length=100, verbose_name=_('Throughpout'))
    acessos = models.CharField(max_length=100, verbose_name=_('Acessos'))
    sip = models.CharField(max_length=100, verbose_name=_('SIP'))
    intelbras_cloud = models.CharField(max_length=100, verbose_name=_('Intelbras Cloud'))
    arma_cartao_sd = models.CharField(max_length=100, verbose_name=_('Armazenamento Cartão SD'))
    alarme = models.CharField(max_length=100, verbose_name=_('Alarme'))
    aquecedor = models.CharField(max_length=100, verbose_name=_('Aquecedor'))
    alimentacao = models.CharField(max_length=100, verbose_name=_('Alimentação'))
    consumo = models.CharField(max_length=100, verbose_name=_('Consumo'))
    grau_protection = models.CharField(max_length=100, verbose_name=_('Grau de Proteção'))
