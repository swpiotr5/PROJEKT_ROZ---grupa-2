from django.db import models

# Create your models here.

class Main(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

class Children(models.Model):
    name = models.CharField(max_length=60, blank=False, null=False)
    surname = models.CharField(max_length=60, blank=False, null=False )
    date_of_birth = models.DateField(auto_now_add=True, blank=False, null=False)
    place_of_bitrh = models.CharField(max_length=60, blank=False, null=False)
    date_of_admission  = models.DateTimeField(auto_now_add=True, blank=False, null=False)
    referral_number = models.CharField(max_length=60)
    mother = models.CharField(max_length=60, blank=False, null=False)
    father = models.CharField(max_length=60, blank=False, null=False)
    legal_guardian = models.CharField(max_length=60, blank=False, null=False)
    siblings = models.IntegerField(default=0, blank=False, null=False)
    notes = models.TextField(blank=False, null=False)

    def __str__(self):
        return f"{self.name} {self.surname}"