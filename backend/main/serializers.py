from rest_framework import serializers
from .models import Main
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = ('id', 'title', 'description', 'completed')