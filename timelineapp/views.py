import base64
import hashlib

from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication


class AWSTokenView(APIView):

    authentication_classes = (authentication.TokenAuthentication,)

    def get(self, request, format=None):
        customer_key = settings.AWS_CUSTOMER_KEY
        md5 = base64.b64encode(hashlib.md5(base64.b64decode(customer_key)).digest()).decode()
        data = {
            'key': customer_key,
            'md5': md5
        }

        return Response(data)
