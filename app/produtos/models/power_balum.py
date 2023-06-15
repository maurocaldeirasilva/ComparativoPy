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
    