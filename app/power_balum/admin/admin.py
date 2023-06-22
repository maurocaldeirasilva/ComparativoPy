from ..models.eletrica_power_balum import Eletrica
from ..models.geral_power_balum import GeralPowerBalum
from ..models.img_power_balum import ImgPowerBalum
from ..models.rede import Rede

from django.contrib import admin


admin.site.register(Eletrica)

admin.site.register(GeralPowerBalum)

admin.site.register(ImgPowerBalum)

admin.site.register(Rede)
