from django.urls import path
from .views import UserView, CategoryView, ExpenseView

urlpatterns = [
    path('users/', UserView.as_view({'get': 'list', 'post': 'create'}), name='userviewset-list'),
    path('categories/', CategoryView.as_view({'get': 'list', 'post': 'create'}), name='categoryviewset-list'),
    path('expenses/', ExpenseView.as_view({'get': 'list', 'post': 'create'}), name='expenseviewset-list')
]
