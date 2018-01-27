from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from timelineapp.lib.mixins import FullModelMixin


class UserManager(BaseUserManager):

    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email and password
        """

        if not email:
            raise ValueError('Users must have an email address.')

        user = self.model(
            email=self.normalize_email(email)
        )

        user.set_password(password)
        user.save(using=self._db)

        return user


class CustomUser(AbstractBaseUser, FullModelMixin):
    """
    User model that is used to determine access
    """

    email = models.EmailField(unique=True, db_index=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    @property
    def full_name(self):
        return '{} {}'.format(self.first_name, self.last_name)

    def __str__(self):
        return self.full_name


@receiver(post_save, sender=CustomUser)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
