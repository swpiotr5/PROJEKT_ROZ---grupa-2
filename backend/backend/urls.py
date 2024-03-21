from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

from django.urls import path, include
from main import views as main_views

router = routers.DefaultRouter()
router.register(r'mains', main_views.MainView, 'main')

urlpatterns = [
    # Dodaj nową ścieżkę do obsługi uwierzytelniania
    path('login/', main_views.LoginView.as_view(), name='login'),

    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('token/', 
          jwt_views.TokenObtainPairView.as_view(), 
          name='token_obtain_pair'),
    path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name='token_refresh'),
    path('logout/', main_views.LogoutView.as_view(), name='logout')
]


# urlpatterns = [
#     path('api/', include(router.urls)),
#     path('api/login/', include('main.urls')),
#     path('admin/', admin.site.urls),
#     path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),
#     path('token/', 
#           jwt_views.TokenObtainPairView.as_view(), 
#           name='token_obtain_pair'),
#     path('token/refresh/', 
#           jwt_views.TokenRefreshView.as_view(), 
#           name='token_refresh'),
# ]
