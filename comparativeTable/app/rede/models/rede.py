###
# Libs
###
from django.db import models
from django.utils.translation import gettext as _

###
# Model
###


class Rede(models.Model):
    interface = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Interface'))
    ddns = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('DDNS'))
    rtmp = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('RTMP'))
    ftp = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('FTP'))
    sip = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('SIP'))
    snmp = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('SNMP'))
    throughput = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('Throughput'))
    conexoes = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Conexões/Aberturas de canais'))
    intelbras_cloud = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Intelbras Cloud'))
    comp_adaptador_wireless = models.CharField(
        max_length=100, blank=True, null=True, verbose_name=_('Compatibilidade com Adaptador Wireless'))
    poe = models.CharField(max_length=100, blank=True, null=True, verbose_name=_('PoE'))
