###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _
from app.produtos.constants import IP

###
# Model
###


class Camera(models.Model):
    dist_focal = models.CharField(
        max_length=100, verbose_name=_('Distância Focal'))
    ang_visao = models.CharField(
        max_length=100, verbose_name=_('Angulo de Visão'))
    zoom = models.CharField(max_length=100, verbose_name=_('Zoom'))
    resolucao = models.CharField(max_length=100, verbose_name=_('Resolução'))
    interface = models.CharField(max_length=100, verbose_name=_('Interface'))
    temp = models.CharField(max_length=100, verbose_name=_('Temperatura'))
    amb_instalation = models.CharField(
        max_length=100, verbose_name=_('Ambiente de Instalação'))
    type = models.CharField(max_length=100, verbose_name=_('Tipo'), choices=IP)
