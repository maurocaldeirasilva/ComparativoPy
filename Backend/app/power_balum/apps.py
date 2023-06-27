"""
Power Balum Apps
"""
###
# Libraries
###
from django.apps import AppConfig


###
# Config
###
class PowerBalumConfig(AppConfig):
    name = 'app.power_balum'

    def ready(self):
        import app.power_balum.signals
