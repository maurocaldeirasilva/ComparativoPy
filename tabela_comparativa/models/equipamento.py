
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
    alimentacao = models.CharField(max_length=100, verbose_name=_('Alimentação'))
    consumo = models.CharField(max_length=100, verbose_name=_('Consumo'))
