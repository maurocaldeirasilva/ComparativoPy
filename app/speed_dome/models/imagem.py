
###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###


class Imagem(models.Model):
    compressao =  models.CharField(max_length=100, verbose_name=_('Compressão'))
    resolucao =  models.CharField(max_length=100, verbose_name=_('Resolução'))
    taxa_fps = models.CharField(max_length=100, verbose_name=_('Taxa de FPS'))
    comp_luz_fundo = models.CharField(max_length=100, verbose_name=_('Compensação de Luz de Fundo'))
    dori = models.CharField(max_length=100, verbose_name=_('DORI'))
    ivs = models.CharField(max_length=100, verbose_name=_('IVS'))
    starlight = models.CharField(max_length=100, verbose_name=_('Starlight'))
    sensor = models.CharField(max_length=100, verbose_name=_('Sensor'))
    ang_visao = models.CharField(max_length=100, verbose_name=_('Angulo de Visão'))