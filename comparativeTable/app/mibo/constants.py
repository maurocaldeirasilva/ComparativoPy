"""
Produtos Constants
"""
###
# Libraries
###

###
# Choices
###
from django.utils.translation import gettext as _

### # Constants Mixins ###


class CameraTypes(object):
    TAXA_FPS = 'taxa_fps'
    DORI = 'dori'
    IVS = 'ivs'
    COMPRESSAO = 'compressao'
    DDNS = 'ddns'
    THROUGHPOUT = 'throughput'
    ARMAZENAMENTO = 'armazenamento'
    CHOICES = [
        (TAXA_FPS, _('Taxa de frames por segundo')),
        (DORI, _('dori')),
        (IVS, _('Inteligência de vídeo')),
        (COMPRESSAO, _('Compressão de vídeo')),
        (DDNS, _('DDNS')),
        (THROUGHPOUT, _('Throughput')),
        (ARMAZENAMENTO, _('Armazenamento Cartão SD')),
    ]


class NVR(object):
    POE = 'poe'
    CHOICES = [POE, ('PoE')]
