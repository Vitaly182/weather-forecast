from rest_framework import serializers
from .models import HistoryScreen


class HistoryScreenSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = HistoryScreen
        fields = '__all__'


class HistoryScreenCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = HistoryScreen
        fields = ('screen',)

