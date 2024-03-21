from django.urls import path
from main import views


urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('api/main/', views.MainView.as_view({'get': 'list', 'post': 'create'}), name='main-list'),
    path('api/main/<int:pk>/', views.MainView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='main-detail'),
]



# urlpatterns = [
#     path('api/login/', views.login_user, name='login'),
#     path('api/main/', views.MainView.as_view({'get': 'list', 'post': 'create'}), name='main-list'),
#     path('api/main/<int:pk>/', views.MainView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='main-detail'),
#     # path('', views.HomeView.as_view(), name='home'),
#     # path('logout/', views.LogoutView.as_view(), name='logout'),
# ]

# urlpatterns = [
#     path('', views.HomeView.as_view(), name='home'),
#     path('api/verify', views.LoginView.as_view(), name='login'),
#     path('logout/', views.LogoutView.as_view(), name='logout'),
#     path('api/main/', views.MainView.as_view({'get': 'list', 'post': 'create'}), name='main-list'),
#     path('api/main/<int:pk>/', views.MainView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='main-detail'),
# ]