###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###


class RedesMibo(models.Model):
    rede_cabeada = models.CharField(
        max_length=100, verbose_name=_('Rede Cabeada'))
    padroes_wifi = models.CharField(
        max_length=100, verbose_name=_('Padrões Wi-Fi'))
    frequencia_wifi = models.CharField(
        max_length=100, verbose_name=_('Frequência Wi-Fi'))
    largura_banda = models.CharField(
        max_length=100, verbose_name=_('Largura de Banda'))
    seguranca = models.CharField(max_length=100, verbose_name=_('Segurança'))
    pot_transmissao = models.CharField(
        max_length=100, verbose_name=_('Potência de Transmissão'))
    taxa_transmissao = models.CharField(
        max_length=100, verbose_name=_('Taxa de Transmissão'))
    antena = models.CharField(max_length=100, verbose_name=_('Antena'))
    metodo_config = models.CharField(
        max_length=100, verbose_name=_('Método de Configuração'))
