import base64
import pytz
from django.conf import settings
from rest_framework import viewsets
from datetime import datetime
from rest_framework.response import Response
# from rest_framework.decorators import list_route

from ..models import Post
from ..serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    lookup_field = 'uuid'
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

    def create(self, request):
        image = request.data.get('image', None)
        title = request.data.get('title', 'Untitled')
        content = request.data.get('content', 'No content')
        js_date_of_event = request.data.get('date_of_event', None)

        if js_date_of_event:
            date_of_event = datetime.fromtimestamp(js_date_of_event / 1000)
            date_of_event = date_of_event.replace(tzinfo=pytz.UTC)
        else:
            date_of_event = None

        new_post = Post.objects.create(
            title=title,
            content=content,
            date_of_event=date_of_event,
            created_by_user=request.user,
        )

        if image:
            aws_loc = new_post.uuid + '.png'

            image = image.replace('data:image/png;base64,', '')

            bits = base64.b64decode(image)

            customer_key = base64.b64decode(settings.AWS_CUSTOMER_KEY)

            settings.S3_CLIENT.put_object(
                Bucket=settings.AWS_STORAGE_BUCKET_NAME,
                Key=aws_loc,
                Body=bits,
                SSECustomerKey=customer_key,
                SSECustomerAlgorithm='AES256',
                ContentType='image/png'
            )

            new_post.image_url = settings.AWS_BUCKET_URL + aws_loc
            new_post.save()

        serializer = self.serializer_class(new_post)

        return Response(serializer.data)
