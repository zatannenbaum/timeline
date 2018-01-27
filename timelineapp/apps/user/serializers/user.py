from rest_framework import serializers
from ..models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField(read_only=True)

    def get_full_name(self, obj):
        return obj.full_name

    class Meta:
        model = CustomUser
        fields = (
            'uuid',
            'first_name',
            'last_name',
            'email',
            'full_name'
        )
