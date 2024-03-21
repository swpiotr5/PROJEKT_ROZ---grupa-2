from rest_framework import viewsets, status, views
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Main
from .serializers import MainSerializer, LoginSerializer
from .serializers import LoginSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated


class HomeView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
        return Response(content)


class MainView(viewsets.ModelViewSet):
    serializer_class = MainSerializer
    queryset = Main.objects.all()


class LoginView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": str(user),
            "token": str(user.auth_token),
        })


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


# class LogoutView(APIView):
#      permission_classes = (IsAuthenticated,)

#      def post(self, request):
#           try:
#                refresh_token = request.data["refresh_token"]
#                token = RefreshToken(refresh_token)
#                token.blacklist()
#                return Response(status=status.HTTP_205_RESET_CONTENT)
#           except Exception as e:
#                return Response(status=status.HTTP_400_BAD_REQUEST)

# class VerifyToken(APIView):
#     permission_classes = (IsAuthenticated,)

#     def post(self, request):
#         token = request.data.get('token')
#         if token:
#             return Response({'message': 'Token is valid'})
#         else:
#             return Response({'message': 'Token is invalid'}, status=status.HTTP_400_BAD_REQUEST)


# class LoginView(views.APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = LoginSerializer(data=request.data, context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data
#         return Response({
#             "user": str(user),
#             "token": str(user.auth_token),
#         })

