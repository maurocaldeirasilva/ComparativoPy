###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _
from .geral import Geral
from .imagem import Imagem
from app.rede.models.rede import Rede


###
# Model
###


class Camera(models.Model):
    geral = models.ForeignKey(
        Geral, on_delete=models.CASCADE, verbose_name=_('Geral'))
    Imagem = models.ForeignKey(
        Imagem, on_delete=models.CASCADE, verbose_name=_('Imagem'))
    rede = models.ForeignKey(
        Rede, on_delete=models.CASCADE, verbose_name=_('Rede'))
