
###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###


class Equipamento(models.Model):
    modelo = models.CharField(max_length=100, verbose_name=_('Modelo'))
    alarme = models.CharField(max_length=100, verbose_name=_('Alarme'))
    alimentacao = models.CharField(
        max_length=100, verbose_name=_('Alimentação'))
    consumo = models.CharField(max_length=100, verbose_name=_('Consumo'))
    sensor = models.CharField(max_length=100, verbose_name=_('Sensor'))
    dist_focal = models.CharField(max_length=100, blank=True,
                                  null=True, verbose_name=_('Distância Focal'))
    ang_visao = models.CharField(
        max_length=100, verbose_name=_('Angulo de Visão'))
    comp_luz_fundo = models.CharField(
        max_length=100, verbose_name=_('Compensação de Luz de Fundo'))
    grau_protection = models.CharField(max_length=100, verbose_name=_('Grau de Proteção'))
    
