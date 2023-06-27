###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _
from .imagem import Imagem
from .geral import Geral
from app.rede.models.rede import Rede

###
# Model
###


class SpeedDome(models.Model):
    imagem = models.ForeignKey(
        Imagem, on_delete=models.CASCADE, verbose_name=_('Imagem'))
    geral = models.ForeignKey(
        Geral, on_delete=models.CASCADE, verbose_name=_('Geral'))
    rede = models.ForeignKey(
        Rede, on_delete=models.CASCADE, verbose_name=_('Rede'))
