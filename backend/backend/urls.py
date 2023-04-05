from django.contrib import admin
from django.urls import path
from django.urls import include, path
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator, OriginValidator
from geometricCanvas.urls import urlpatterns
from .asgi import application

urlpatterns = [
    path('admin/', admin.site.urls),
    # path("django-rq/", include("django_rq.urls")),
    path('3dCanvas/', include('geometricCanvas.urls'))
]

# applicatio = ProtocolTypeRouter({
#     'http': application,
#     'websocket': AllowedHostsOriginValidator(
  
#             URLRouter(
#                 urlpatterns
#             )
  
#     ),
# })
