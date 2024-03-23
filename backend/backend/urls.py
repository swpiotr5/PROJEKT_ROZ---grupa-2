from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from main import views
from rest_framework_simplejwt import views as jwt_views
from django.contrib.auth import views as auth_views

router = routers.DefaultRouter()
router.register(r'mains', views.MainView, 'main')


urlpatterns = [
    # Dodaj nową ścieżkę do obsługi uwierzytelniania
    path('login/', views.LoginView.as_view(), name='login'),


    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('token/', 
          jwt_views.TokenObtainPairView.as_view(), 
          name='token_obtain_pair'),
    path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name='token_refresh'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('social-auth/',include('social_django.urls',namespace='social')),
    path("", views.home,name='home'),
]

