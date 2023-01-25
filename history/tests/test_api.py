from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from history.models import HistoryScreen
from history.serializers import HistoryScreenSerializer, HistoryScreenCreateSerializer


class HistoryScreenApiTestCase(APITestCase):
    def setUp(self):
        self.screen_1 = HistoryScreen.objects.create(screen='C1.jpg')
        self.screen_2 = HistoryScreen.objects.create(screen='C2.jpg')


    def test_get(self):
        url = reverse('history_screen_api')
        response = self.client.get(url)
        serializer_data = HistoryScreenSerializer([self.screen_1, self.screen_2], many=True).data
        for e in response.data:
            e['screen'] = e['screen'].replace('http://testserver', '')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(serializer_data[::-1], response.data)
