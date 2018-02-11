from .models import (
    DateModel,
    UUIDModel
)


class FullModelMixin(DateModel, UUIDModel):
    """
    Model mixin to give all objects date fields and unique IDs
    """

    class Meta:
        abstract = True
