import json
from rest_framework import generics
from rest_framework.response import Response
from .serializers import ForecastSerializer
from .models import MyModel
import requests


class ForecastApi(generics.CreateAPIView):
    queryset = MyModel.objects.all()
    serializer_class = ForecastSerializer
    def create(self, request):
        response_list = []
        response = requests.get(json.loads(request.body)['param'])
        response_list.append(response.json())
        return Response(response_list)
