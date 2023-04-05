from django.urls import path
from . import views
from . import consumers

urlpatterns = [
    path("generate-random-value/", views.generate_random_value, name="generate_random_value"),
    path("random-value/", consumers.RandomValueConsumer.as_asgi()),
]
# http://127.0.0.1:8000/3dCanvas/random-value/