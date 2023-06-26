###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class Geral(models.Model):
    video_in = models.CharField(max_length=100, verbose_name=_('Entrada de sinal de vídeo'))
    video_out = models.CharField(max_length=100, verbose_name=_('Saída de sinal de vídeo'))
    alimentacao_camera = models.CharField(max_length=100, verbose_name=_('Alimentação da câmera'))
    compatibilidade_dados = models.CharField(max_length=100, verbose_name=_('Compatibilidade de dados'))
    compatibilidade_audio = models.CharField(max_length=100, verbose_name=_('Compatibilidade de áudio'))
    fun4p1 = models.CharField(max_length=100, verbose_name=_('Função 4 em 1'))