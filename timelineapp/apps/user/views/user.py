from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route

from ..models import CustomUser
from ..serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    lookup_field = 'uuid'
    serializer_class = UserSerializer

    def get_queryset(self):
        return CustomUser.objects.all()

    @list_route(methods=['GET'])
    def account(self, request, uuid=None):
        user = request.user

        serializer = self.serializer_class(user)

        return Response(serializer.data)
