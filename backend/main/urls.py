from django.urls import path
from . import views
urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('api/main/', views.MainView.as_view({'get': 'list', 'post': 'create'}), name='main-list'),
    path('api/main/<int:pk>/', views.MainView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='main-detail'),
]