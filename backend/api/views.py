from django.shortcuts import render
from django.contrib.auth import login, authenticate
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, CategorySerializer, ExpenseSerializer
from .models import User, Category, Expense

# Create your views here.
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class ExpenseView(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    queryset = Expense.objects.all()

class LoginView(APIView):
    def post(self, request, format=None):
        data = request.data
        email = data.get('email', None)
        password = data.get('password', None)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'status': 'error', 'error': 'Email invalid'}, status=status.HTTP_400_BAD_REQUEST)
        
        if password == user.password:
            return Response({'status': 'ok'}, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'error', 'error': 'Password invalid'}, status=status.HTTP_400_BAD_REQUEST)
