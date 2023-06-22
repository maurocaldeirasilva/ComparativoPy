"""
API V1: Camera Urls
"""
###
# Libraries
###
from django.urls import path, include
from rest_framework import routers

from .views.group import GroupViewSet


###
# Routers
###
""" Main router """
router = routers.SimpleRouter()
router.register(r'group', GroupViewSet, basename='classes')

###
# URLs
###
urlpatterns = [
    path('', include(router.urls)),
]
