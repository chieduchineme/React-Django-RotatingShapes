from django.db import models

class RandomValue(models.Model):
    dimensionValue = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.dimensionValue)


