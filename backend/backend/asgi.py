# import os
# import django
# from channels.routing import get_default_application
# from django.urls import re_path
# from channels.auth import AuthMiddlewareStack
# from channels.routing import ProtocolTypeRouter, URLRouter
# from django.core.asgi import get_asgi_application
# from channels.security.websocket import AllowedHostsOriginValidator, OriginValidator

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# application = get_default_application()
# # get_asgi_application()
# django.setup()

import django
import os
from channels.security.websocket import AllowedHostsOriginValidator
from django.core.asgi import get_asgi_application
from channels.routing import get_default_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"

# import os
# from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
# from channels.auth import AuthMiddlewareStack
# from myapp.routing import websocket_urlpatterns
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# application = get_asgi_application()
# django.setup()
# application = get_default_application()




from geometricCanvas.urls import urlpatterns

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": 
        URLRouter(
            urlpatterns
        ),
})




