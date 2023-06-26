from app.gravador.models.audio import Audio
from app.gravador.models.geral import Geral
from app.gravador.models.imagem import Imagem
from app.gravador.models.rede import Rede
from app.gravador.models.gravador import Gravador

from django.contrib import admin


admin.site.register(Audio)

admin.site.register(Geral)

admin.site.register(Imagem)

admin.site.register(Rede)

admin.site.register(Gravador)
