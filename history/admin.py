from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import HistoryScreen


@admin.register(HistoryScreen)
class HistoryScreenAdmin(admin.ModelAdmin):
    list_display = ('id', 'created_at', 'screen', 'get_image')
    readonly_fields = ('get_image',)

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.screen.url} width="100" height="50"/>')
    get_image.short_description = "image"