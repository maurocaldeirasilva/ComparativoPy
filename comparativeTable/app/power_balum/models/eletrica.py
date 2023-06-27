###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class Eletrica(models.Model):
    alimentacao = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Alimentação'))
    consumo = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Consumo'))
    corrente_max = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Corrente Máxima'))