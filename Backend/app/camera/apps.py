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
class CameraConfig(AppConfig):
    name = 'app.camera'

    def ready(self):
        import app.camera.signals
