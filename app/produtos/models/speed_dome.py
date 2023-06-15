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
    zoom_optico = models.CharField(max_length=100, verbose_name=_('Zoom Óptico'))
    zoom_digital = models.CharField(max_length=100, verbose_name=_('Zoom Digital'))
    compressao = models.CharField(max_length=100, verbose_name=_('Compressão'))
    resolucao = models.CharField(max_length=100, verbose_name=_('Resolução'))
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
