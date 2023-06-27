"""
API V1: Speed Dome Urls
"""
###
# Libraries
###
from django.urls import path, include
from rest_framework import routers


###
# Routers
###
""" Main router """
router = routers.SimpleRouter()

###
# URLs
###
urlpatterns = [
    path('', include(router.urls)),
]
