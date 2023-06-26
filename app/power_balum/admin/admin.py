from app.power_balum.models.eletrica import Eletrica
from app.power_balum.models.geral import Geral
from app.power_balum.models.imagem import Imagem
from app.power_balum.models.power_balum import PowerBalum


from django.contrib import admin


admin.site.register(Eletrica)

admin.site.register(Geral)

admin.site.register(Imagem)


admin.site.register(PowerBalum)

