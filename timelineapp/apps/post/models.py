from django.db import models

from timelineapp.lib.mixins import FullModelMixin


class Post(FullModelMixin):
    """
    Post Model that contains information that populates a timeline
    """

    created_by_user = models.ForeignKey('user.CustomUser', on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=75, default='Untitled')
    date_of_event = models.DateTimeField(null=True, blank=True)
    image_url = models.CharField(max_length=100, null=True)
    content = models.TextField()
