###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class PowerBalum(models.Model):
    video_in = models.CharField(max_length=100, verbose_name=_('Entrada de sinal de vídeo'))
    video_out = models.CharField(max_length=100, verbose_name=_('Saída de sinal de vídeo'))
    alimentacao_camera = models.CharField(max_length=100, verbose_name=_('Alimentação da câmera'))
    prot_video = models.CharField(max_length=100, verbose_name=_('Protocolo de vídeo'))
    alcance_analogica = models.CharField(max_length=100, verbose_name=_('Alcance analógica'))
    alcance_hdcvi = models.CharField(max_length=100, verbose_name=_('Alcance HDCVI'))
    alcence_hdtvi = models.CharField(max_length=100, verbose_name=_('Alcance HDTVI'))
    alcance_ahd = models.CharField(max_length=100, verbose_name=_('Alcance AHD'))
    filtro_ruido = models.CharField(max_length=100, verbose_name=_('Filtro de ruído'))
    compatibilidade_dados = models.CharField(max_length=100, verbose_name=_('Compatibilidade de dados'))
    compatibilidade_audio = models.CharField(max_length=100, verbose_name=_('Compatibilidade de áudio'))
    alimentacao = models.CharField(max_length=100, verbose_name=_('Alimentação'))
    corrente_max = models.CharField(max_length=100, verbose_name=_('Corrente máxima'))
    consumo = models.CharField(max_length=100, verbose_name=_('Consumo'))