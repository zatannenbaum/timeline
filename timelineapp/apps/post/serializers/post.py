from rest_framework import serializers

from timelineapp.apps.user.serializers import UserSerializer
from ..models import Post


class PostSerializer(serializers.ModelSerializer):
    created_by_user = UserSerializer()

    class Meta:
        model = Post
        fields = (
            'uuid',
            'created_by_user',
            'title',
            'date_of_event',
            'image_url',
            'content',
            'date_created',
            'date_updated',
        )
