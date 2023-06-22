###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###
class GeralCamera(models.Model):
    alarme = models.CharField(max_length=100, verbose_name=_('Alarme'))
    temperatura = models.CharField(max_length=100, verbose_name=_('Temperatura'))
    ambiente_instalação = models.CharField(max_length=100, verbose_name=_('Ambiente de Instalação'))
    grau_proteção = models.CharField(max_length=100, verbose_name=_('Grau de Proteção'))
    arma_cartao_sd = models.CharField(max_length=100, verbose_name=_('Armazenamento Cartão SD'))