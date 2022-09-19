from django.db import models


class HistoryScreen(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Date of creation')
    screen = models.ImageField(upload_to='%Y/%m/%d/')

    class Meta:
        ordering = ['-created_at']






