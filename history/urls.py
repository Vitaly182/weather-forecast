from django.urls import path
from .api_views import HistoryScreenApi, HistoryScreenCreate

urlpatterns = [
    path('api/history_screen/', HistoryScreenApi.as_view(), name='history_screen_api'),
    path('api/history_screen/create/', HistoryScreenCreate.as_view(), name='history_screen_api_create'),
]