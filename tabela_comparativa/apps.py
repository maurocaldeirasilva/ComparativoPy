"""
Groups Apps
"""
###
# Libraries
###
from django.apps import AppConfig


###
# Config
###
class TabelaComparativaConfig(AppConfig):
    name = 'tabela_comparativa'

    def ready(self):
        import tabela_comparativa.signals
