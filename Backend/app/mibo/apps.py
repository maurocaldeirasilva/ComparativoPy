"""
Mibo Apps
"""
###
# Libraries
###
from django.apps import AppConfig


###
# Config
###
class MiboConfig(AppConfig):
    name = 'app.mibo'

    def ready(self):
        import app.mibo.signals
