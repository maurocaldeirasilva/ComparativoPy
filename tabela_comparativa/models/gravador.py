
###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###

class gravador(models.Model):
    canias = models.CharField(max_length=100, verbose_name=_('Canais'))
    ivs = models.CharField(max_length=100, verbose_name=_('IVS'))
    compressao = models.CharField(max_length=100, verbose_name=_('Compressão'))
    resolucao_visu = models.CharField(max_length=100, verbose_name=_('Resolução de Visualização'))
    resolucao_repr = models.CharField(max_length=100, verbose_name=_('Resolução de Reprodução'))
    tela_add = models.CharField(max_length=100, verbose_name=_('Tela Adicional'))
    video_out = models.CharField(max_length=100, verbose_name=_('Saída de Vídeo'))
    planification = models.CharField(max_length=100, verbose_name=_('Planificação'))
    audio = models.CharField(max_length=100, verbose_name=_('Áudio'))
    ddns = models.CharField(max_length=100, verbose_name=_('DDNS'))
    rtmp = models.CharField(max_length=100, verbose_name=_('RTMP'))
    ftp = models.CharField(max_length=100, verbose_name=_('FTP'))
    snmp = models.CharField(max_length=100, verbose_name=_('SNMP'))
    throughput = models.CharField(max_length=100, verbose_name=_('Throughput'))
    conexoes = models.CharField(max_length=100, verbose_name=_('Conexões/Aberturas de canais'))
    intelbras_cloud = models.CharField(max_length=100, verbose_name=_('Intelbras Cloud'))
    comp_adp_wireless = models.CharField(max_length=100, verbose_name=_('Compatibilidade com Adaptador Wireless'))
    quant_hds = models.CharField(max_length=100, verbose_name=_('Quantidade de HDs'))
    capacidade_hd = models.CharField(max_length=100, verbose_name=_('Capacidade do HD'))
    rec_senha = models.CharField(max_length=100, verbose_name=_('Recuperação de Senha'))