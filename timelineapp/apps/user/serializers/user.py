from django.conf import settings
from rest_framework import serializers
from ..models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField(read_only=True)
    image_url = serializers.SerializerMethodField(read_only=True)

    def get_full_name(self, obj):
        return obj.full_name

    def get_image_url(self, obj):
        return settings.BASE_URL + 'static/' + obj.first_name + '.jpg'

    class Meta:
        model = CustomUser
        fields = (
            'uuid',
            'first_name',
            'last_name',
            'email',
            'full_name',
            'image_url'
        )
