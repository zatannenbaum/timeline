from django.conf.urls import include, url
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from rest_framework.authtoken import views as auth_view

from timelineapp.apps.post.urls import router as post_router
from timelineapp.apps.user.urls import router as user_router

api_v0_urls = (
    post_router.urls +
    user_router.urls
)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/', include(api_v0_urls)),
    url(r'^api/login/', auth_view.obtain_auth_token),
    url(r'^', TemplateView.as_view(template_name='index.html')),
    url(r'^(?P<path>.*)/$', TemplateView.as_view(template_name='index.html')),
]
