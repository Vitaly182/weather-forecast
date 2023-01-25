from django.test import TestCase
from history.models import HistoryScreen
from history.serializers import HistoryScreenSerializer, HistoryScreenCreateSerializer


class HistoryScreenSerializerTestCase(TestCase):
    def test_ok(self):
        screen_1 = HistoryScreen.objects.create(screen='C1.jpg')
        screen_2 = HistoryScreen.objects.create(screen='C2.jpg')
        data = HistoryScreenSerializer([screen_1, screen_2], many=True).data
        expected_data = [
            {
                'id': screen_1.id,
                'created_at': screen_1.created_at.strftime('%Y-%m-%d %H:%M:%S'),
                'screen': '/screen/' + screen_1.screen.name,
            },
            {
                'id': screen_2.id,
                'created_at': screen_2.created_at.strftime('%Y-%m-%d %H:%M:%S'),
                'screen': '/screen/' + screen_2.screen.name,
            },
        ]
        self.assertEqual(data, expected_data)


class HistoryScreenCreateSerializerTestCase(TestCase):
    def test_ok(self):
        screen_1 = HistoryScreen.objects.create(screen='C1.jpg')
        screen_2 = HistoryScreen.objects.create(screen='C2.jpg')
        data = HistoryScreenCreateSerializer([screen_1, screen_2], many=True).data
        expected_data = [
            {
                'screen': '/screen/' + screen_1.screen.name,
            },
            {
                'screen': '/screen/' + screen_2.screen.name,
            },
        ]
        self.assertEqual(data, expected_data)
