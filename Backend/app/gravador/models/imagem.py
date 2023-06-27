###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###
class Imagem(models.Model):
    resolucao_gravacao = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Resolução de Gravação'))
    resolucao_visualizacao = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Resolução de Visualização'))
    tela_adicional = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Tela Adicional'))
    planificacao = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Planificação'))
    saida_video = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Saída de Vídeo'))
    ivs = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('IVS'))
    compressao = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Compressão'))
