# import serializers from the REST framework
from rest_framework import serializers
 
# import the data model
from .models import RandomValue
 
# create a serializer class
class ShapesSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = RandomValue
        fields = ('dimensionValue')