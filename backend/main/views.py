from rest_framework import viewsets, status, views
from .models import Main, Children
from .serializers import MainSerializer, LoginSerializer, UserSerializer, ChildrenSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.response import Response
from django.http import HttpResponse
from .utils import add_children
from rest_framework.decorators import api_view

def add_children_view():
    add_children()
    return HttpResponse("Przykładowe dane zostały dodane do bazy.")

@api_view(['GET'])
def get_children_view(request):
    children = Children.objects.all()
    serializer = ChildrenSerializer(children, many=True)
    return Response(serializer.data)


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
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        redirect_url = 'http://localhost:3000/home'

        response = Response({
            "user": str(user),
            "token": token.key,
        }, status=status.HTTP_200_OK)
        response['Location'] = redirect_url 
        return response


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            print(request.META.get('HTTP_AUTHORIZATION'))
            request.user.auth_token.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class RegistrationView(views.APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


