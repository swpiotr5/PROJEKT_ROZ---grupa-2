from django.urls import path
from main import views


urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('api/logout/', views.LogoutView.as_view(), name='logout'),
    path('api/register/', views.RegistrationView.as_view(), name='register'),
    path('api/main/', views.MainView.as_view({'get': 'list', 'post': 'create'}), name='main-list'),
    path('api/main/<int:pk>/', views.MainView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='main-detail'),
    path('add_children/', views.add_children_view, name='add_children'),
]
