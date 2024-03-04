from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Main

class MainAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Main, MainAdmin)