###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _
from .audio import Audio
from .geral import Geral
from .imagem import Imagem
from .rede import Rede

###
# Model
###


class Gravador(models.Model):
    audio = models.ForeignKey(
        Audio, on_delete=models.CASCADE, verbose_name=_('Audio'))
    geral = models.ForeignKey(
        Geral, on_delete=models.CASCADE, verbose_name=_('Geral'))
    imagem = models.ForeignKey(
        Imagem, on_delete=models.CASCADE, verbose_name=_('Imagem'))
    rede = models.ForeignKey(
        Rede, on_delete=models.CASCADE, verbose_name=_('Rede'))
