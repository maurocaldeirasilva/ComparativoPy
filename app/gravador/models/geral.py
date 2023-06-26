
###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class Geral(models.Model):
    canais = models.CharField(max_length=100, verbose_name=_('Canais'))
    ips_adicionais = models.CharField(max_length=100, blank = True, null = True,verbose_name=_('IPs Adicionais'))
    modo_nvr = models.CharField(max_length=100, blank = True, null = True, verbose_name=_('Modo NVR'))
    alarme = models.CharField(max_length=100, verbose_name=_('Alarme'))
    quant_hds = models.CharField(max_length=100, verbose_name=_('Quantidade de HDs'))
    capacidade_hd = models.CharField(max_length=100, verbose_name=_('Capacidade do HD'))
    rec_senha = models.CharField(max_length=100, verbose_name=_('Recuperação de Senha'))
    consumo = models.CharField(max_length=100, verbose_name=_('Consumo'))
    alimentacao = models.CharField(max_length=100, verbose_name=_('Alimentação'))