###
# Libs
###
from rest_framework import viewsets, mixins, permissions

from ..serializers.group.default import DefaultGroupSerializer
from ..serializers.group.retrieve import RetrieveGroupSerializer
from groups.models.groups import Group


###
# Viewsets
###
class GroupViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin
):

    queryset = Group.objects.all()

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return RetrieveGroupSerializer
        else:
            return DefaultGroupSerializer
