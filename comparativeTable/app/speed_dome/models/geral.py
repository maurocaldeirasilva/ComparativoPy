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
    dist_focal = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Distância Focal'))
    zoom_optico = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Zoom Óptico'))
    zoom_digital = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Zoom Digital'))
    alcance_ir = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Alcance IR'))
    auto_tracking = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Auto Tracking'))
    aquecedor = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Aquecedor'))
