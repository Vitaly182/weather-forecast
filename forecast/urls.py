from django.urls import path
from .api_views import ForecastApi

urlpatterns = [
    path('api/forecast/', ForecastApi.as_view(), name='forecast_api'),
]