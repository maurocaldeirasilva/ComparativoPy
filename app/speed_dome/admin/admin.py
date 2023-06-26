from app.speed_dome.models.geral import Geral
from app.speed_dome.models.imagem import Imagem
from app.speed_dome.models.speed_dome import SpeedDome

from django.contrib import admin


admin.site.register(Geral)

admin.site.register(Imagem)


admin.site.register(SpeedDome)
