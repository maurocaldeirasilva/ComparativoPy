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
    alarme = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Alarme'))
    temperatura = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Temperatura'))
    ambiente_instalação = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Ambiente de Instalação'))
    grau_proteção = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Grau de Proteção'))
    arma_cartao_sd = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Armazenamento Cartão SD'))
    sensor = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Sensor'))
    obturador = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Obturador'))
    lente = models.CharField(max_length=100, blank=True,
                             null=True, verbose_name=_('Lente'))
    ang_visao = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Angulo de Visão'))
    campoo_visao = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Campo de Visão'))
    alcence_ir = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Alcance IR'))
    dia_noite = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Dia e Noite'))
    sensibilidade = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Sensibilidade'))
    alcance_audio = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Alcance de Áudio'))
    grau_proteção = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Grau de Proteção'))
    ambiente_instalação = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Ambiente de Instalação'))
    armazenamento = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Armazenamento'))
    ivs = models.CharField(max_length=100, blank=True,
                           null=True, verbose_name=_('IVS'))
    ganho_altofalante = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Ganho do Altofalante'))
    temperatura = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Temperatura'))
    consumo = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Consumo'))
    alimentacao = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Alimentação'))
    comp_simnext = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Compatibilidade SimNext'))
    peso = models.CharField(max_length=100, blank=True,
                            null=True, verbose_name=_('Peso'))
