from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path

from rest_framework.authtoken import views as auth_view

from timelineapp.apps.user.urls import router as user_router

from . import views

api_v0_urls = (
    user_router.urls
)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', views.HomePageView.as_view()),
    url(r'^api/', include(api_v0_urls)),
    url(r'^login/', auth_view.obtain_auth_token)
]
