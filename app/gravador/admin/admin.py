from ..models.audio_gravador import AudioGravador
from ..models.geral_gravador import GeralGravadores
from ..models.img_gravador import ImgGravador
from ..models.rede import Rede

from django.contrib import admin


admin.site.register(AudioGravador)

admin.site.register(GeralGravadores)

admin.site.register(ImgGravador)

admin.site.register(Rede)
