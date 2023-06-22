"""
Gravador Apps
"""
###
# Libraries
###
from django.apps import AppConfig


###
# Config
###
class GravadorConfig(AppConfig):
    name = 'app.gravador'

    def ready(self):
        import app.gravador.signals
