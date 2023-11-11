from django.contrib import admin
from .models import User, Category, Expense

class UserAdmin(admin.ModelAdmin):
    pass
class CategoryAdmin(admin.ModelAdmin):
    pass
class ExpenseAdmin(admin.ModelAdmin):
    pass

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Expense, ExpenseAdmin)