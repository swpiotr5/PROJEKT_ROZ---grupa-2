from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from main import views

router = routers.DefaultRouter()
router.register(r'mains', views.MainView, 'main')


urlpatterns = [
    path('', views.index, name='index'),  
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

