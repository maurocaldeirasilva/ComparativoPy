"""
Camera Apps
"""
###
# Libraries
###
from django.apps import AppConfig


###
# Config
###
class RedeConfig(AppConfig):
    name = 'app.rede'

    def ready(self):
        import app.rede.signals
