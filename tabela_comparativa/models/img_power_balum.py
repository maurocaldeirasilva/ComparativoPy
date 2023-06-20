###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###
class imgPowerBalum(model.Models):
    protocolos_de_video = models.CharField(max_length=100, verbose_name=_('Protocolos de Vídeo'))
    alcance_analógica = models.CharField(max_length=100, verbose_name=_('Alcance Analógica'))
    alcance_hdcvi = models.CharField(max_length=100, verbose_name=_('Alcance HDCVI'))
    alcance_hdtvi = models.CharField(max_length=100, verbose_name=_('Alcance HDTVI'))
    alcance_ahd = models.CharField(max_length=100, verbose_name=_('Alcance AHD'))
    filtro_ruido_interferência = models.CharField(max_length=100, verbose_name=_('Filtro de Ruído e Interferência'))