from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MainSerializer
from .models import Main

# Create your views here.

class MainView(viewsets.ModelViewSet):
    serializer_class = MainSerializer
    queryset = Main.objects.all()

def index(request):
    return render(request, 'index.html')