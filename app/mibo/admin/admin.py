from ..models.geral_camera import GeralCamera
from ..models.img_mibo import ImgMibo
from ..models.mibo import Mibo
from ..models.redes_mibo import RedesMibo
from django.contrib import admin


admin.site.register(GeralCamera)

admin.site.register(ImgMibo)

admin.site.register(RedesMibo)

admin.site.register(Mibo)
