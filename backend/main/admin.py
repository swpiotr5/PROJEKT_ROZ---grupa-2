from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Main, Children

class MainAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

class ChildrenAdmin(admin.ModelAdmin):
    list_display = ('name', 'surname', 'date_of_birth', 'place_of_bitrh', 'date_of_admission', 'referral_number', 'mother', 'father', 'legal_guardian', 'siblings', 'notes')

# Register your models here.

admin.site.register(Main, MainAdmin)
admin.site.register(Children, ChildrenAdmin)