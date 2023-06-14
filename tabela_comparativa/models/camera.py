###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _
from ..constants import IP

###
# Model
###
class Camera(models.Model):
    sensor = models.CharField(max_length=100, verbose_name=_('Sensor'))
    dist_focal = models.CharField(max_length=100, verbose_name=_('Distância Focal'))
    ang_visao = models.CharField(max_length=100, verbose_name=_('Angulo de Visão'))
    zoom = models.CharField(max_length=100, verbose_name=_('Zoom'))
    alcance_ir = models.CharField(max_length=100, verbose_name=_('Alcance IR'))
    resolucao = models.CharField(max_length=100, verbose_name=_('Resolução'))
    comp_luz_fundo = models.CharField(max_length=100, verbose_name=_('Compensação de Luz de Fundo'))
    interface = models.CharField(max_length=100, verbose_name=_('Interface'))
    temp = models.CharField(max_length=100, verbose_name=_('Temperatura'))
    amb_instalation = models.CharField(max_length=100, verbose_name=_('Ambiente de Instalação'))
    grau_protection = models.CharField(max_length=100, verbose_name=_('Grau de Proteção'))
    type = models.CharField(max_length=100, verbose_name=_('Tipo'), choices= IP)
