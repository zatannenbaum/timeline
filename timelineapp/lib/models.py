from django.db import models
from .utils import generate_uuid


class UUIDModel(models.Model):
    """
    Adds a unique ID to each object.
    """

    uuid = models.CharField(
        blank=True, editable=False, max_length=36, unique=True,
        default=generate_uuid, db_index=True
    )

    class Meta:
        abstract = True


class DateModel(models.Model):
    """
    Adds date_updated and date_created to each object
    """

    date_created = models.DateTimeField(editable=False, auto_now_add=True)
    date_updated = models.DateTimeField(editable=False, auto_now=True)

    class Meta:
        abstract = True
