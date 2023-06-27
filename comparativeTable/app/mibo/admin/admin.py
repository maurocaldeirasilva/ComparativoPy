from ..models.geral import Geral
from ..models.imagem import Imagem
from ..models.mibo import Mibo
from ..models.rede import Rede
from django.contrib import admin


admin.site.register(Geral)

admin.site.register(Imagem)

admin.site.register(Rede)

admin.site.register(Mibo)
