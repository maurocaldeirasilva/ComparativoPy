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
class ProdutosConfig(AppConfig):
    name = 'app.produtos'

    def ready(self):
        import produtos.signals
