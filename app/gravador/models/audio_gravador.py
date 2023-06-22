###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###
class AudioGravador(models.Model):  
    interface = models.CharField(max_length=100, verbose_name=_('Interface'))
    