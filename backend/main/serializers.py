from rest_framework import serializers
from .models import Main

class MainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Main
        fields = ('id', 'title', 'description', 'completed')

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        # Pobierz adres email i hasło z danych wejściowych
        email = data.get('email')
        password = data.get('password')

        # Uwierzytelnij użytkownika
        user = authenticate(request=self.context.get('request'), username=email, password=password)

        # Sprawdź, czy użytkownik został uwierzytelniony i czy jest aktywny
        if not user:
            raise serializers.ValidationError("Incorrect Credentials")
        if not user.is_active:
            raise serializers.ValidationError("User is inactive")

        # Zwróć uwierzytelnionego użytkownika
        return user