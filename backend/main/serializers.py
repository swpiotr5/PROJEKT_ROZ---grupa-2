from rest_framework import serializers
from .models import Main
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = ('id', 'title', 'description', 'completed')


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Uwierzytelnij użytkownika
        user = authenticate(request=self.context.get('request'), username=email, password=password)

        if not user:
            raise serializers.ValidationError("Incorrect Credentials")
        if not user.is_active:
            raise serializers.ValidationError("User is inactive")

        return user



    # def validate(self, data):
    #     email = data.get('email')
    #     password = data.get('password')


    #     if not email or not password:
    #         raise serializers.ValidationError("Email and password are required")

    #     # np. sprawdzenie czy istnieje użytkownik o podanym adresie email i czy hasło się zgadza
    
    #     return data

    # def validate(self, data):
    #     # Pobierz adres email i hasło z danych wejściowych
    #     email = data.get('email')
    #     password = data.get('password')

    #     user = authenticate(request=self.context.get('request'), username=email, password=password)

    #     if not user:
    #         raise serializers.ValidationError("Incorrect Credentials")
    #     if not user.is_active:
    #         raise serializers.ValidationError("User is inactive")

    #     token, _ = Token.objects.get_or_create(user=user)

    #     return token.key


    # def validate(self, data):
    #     email = data.get('email')
    #     password = data.get('password')

    #     user = authenticate(request=self.context.get('request'), username=email, password=password)

    #     if not user:
    #         raise serializers.ValidationError("Incorrect Credentials")
    #     if not user.is_active:
    #         raise serializers.ValidationError("User is inactive")

    #     return user