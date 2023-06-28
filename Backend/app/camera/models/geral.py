###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###
class Geral(models.Model):
    modelo = models.CharField(max_length=100, verbose_name=_("Modelo"))
    alarme = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Alarme'))
    temperatura = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Temperatura'))
    ambiente_instalação = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Ambiente de Instalação'))
    grau_proteção = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Grau de Proteção'))
    arma_cartao_sd = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Armazenamento Cartão SD'))
    audio = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Áudio'))