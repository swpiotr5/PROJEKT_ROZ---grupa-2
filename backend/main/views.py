from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MainSerializer, LoginSerializer
from .models import Main
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers, views, status
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


class HomeView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
        return Response(content)

class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": str(user),
            "token": str(user.auth_token),
        })


class MainView(viewsets.ModelViewSet):
    serializer_class = MainSerializer
    queryset = Main.objects.all()

def index(request):
    return render(request, 'index.html')