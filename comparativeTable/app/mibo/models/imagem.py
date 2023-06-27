###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class Imagem(models.Model):
    resolucao = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Resolução'))
    resolucao_eco = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Resolução ECO'))
    taxa_quadros = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Taxa de Quadros'))
    blc = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('BLC'))
    ddd_dnr = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('3D DNR'))
    wdr = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('WDR'))
    zoom_digital = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Zoom Digital'))