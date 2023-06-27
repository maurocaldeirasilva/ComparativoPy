"""
Speed Dome Apps
"""
###
# Libraries
###
from django.apps import AppConfig


###
# Config
###
class SpeedDomeConfig(AppConfig):
    name = 'app.speed_dome'

    def ready(self):
        import app.speed_dome.signals
