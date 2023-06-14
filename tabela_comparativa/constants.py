"""
Group Constants
"""
###
# Libraries
###

###
# Choices
###
from django.utils.translation import gettext as _  

### # Constants Mixins ### 
class PaymentStatusMixin(object):     
    FULL_PAYMENT =  'paid'    
    OPEN = 'open'     
    PARTIAL_PAYMENT = 'partial'     
    SCHEDULED = 'scheduled'      
    CHOICES = [FULL_PAYMENT, ('Paid in Full'), (OPEN, _('Open')), (PARTIAL_PAYMENT, ('Partial Payment')), (SCHEDULED, _('Scheduled')),]
    
class IP(object):
    TAXA_FPS = 'taxa_fps'
    DORI = 'dori'
    IVS = 'ivs'
    COMPRESSAO = 'compressao'
    DDNS = 'ddns'
    THROUGHPOUT = 'throupout'
    ARMAZENAMENTO = 'armazenamento'
    CHOICES = [TAXA_FPS, ('Taxa de frames por segundo'), (DORI, ('dori')), (IVS, ('Inteligência de vídeo')), (COMPRESSAO, ('Compressão de vídeo'))
              , (DDNS, ('DDNS')), (THROUGHPOUT, ('Throughpout')), (ARMAZENAMENTO, ('Armazenamento Cartão SD'))]
    
class NVR(object):
    POE = 'poe'
    CHOICES = [POE, ('PoE')]
