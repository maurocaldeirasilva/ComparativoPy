###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _
from .eletrica import Eletrica
from .imagem import Imagem
from .geral import Geral
from app.rede.models.rede import Rede

###
# Model
###


class PowerBalum(models.Model):
    eletrica = models.ForeignKey(
        Eletrica, on_delete=models.CASCADE, verbose_name=_('Eletrica'))
    imagem = models.ForeignKey(
        Imagem, on_delete=models.CASCADE, verbose_name=_('Imagem'))
    geral = models.ForeignKey(
        Geral, on_delete=models.CASCADE, verbose_name=_('Geral'))
    rede = models.ForeignKey(
        Rede, on_delete=models.CASCADE, verbose_name=_('Rede'))
