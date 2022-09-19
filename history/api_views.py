from rest_framework import generics
from .serializers import HistoryScreenSerializer, HistoryScreenCreateSerializer
from .models import HistoryScreen



class HistoryScreenApi(generics.ListAPIView):
    serializer_class = HistoryScreenSerializer
    queryset = HistoryScreen.objects.all()[0:10]


class HistoryScreenCreate(generics.CreateAPIView):
    serializer_class = HistoryScreenCreateSerializer
    queryset = HistoryScreen.objects.all()
