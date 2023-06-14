from ..models.camera import Camera
from ..models.equipamento import Equipamento
from ..models.gravador import gravador
from ..models.mibo import Mibo

from django.contrib import admin



admin.site.register(Camera)

admin.site.register(Equipamento)

admin.site.register(gravador)

admin.site.register(Mibo)



