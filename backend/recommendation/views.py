from django.http import JsonResponse

from rest_framework.views import APIView

from operator import add

from .utils.web_scrape import scrape_web_pages
from .utils.model_prediction import predict

from recommendation.constants import NUM_RECOMMENDATIONS

from location.models import Location
from location.serializers import LocationSerializer

class MakeRecommendationView(APIView):
        def get_top_results(self, final_confidence_values, type):
            indexes = sorted(range(len(final_confidence_values)), key=lambda x:final_confidence_values[x], reverse=True)

            ids = [index + 1 for index in indexes]
            final_ids = [id for id in ids if id in [location.id for location in Location.objects.filter(type=type)]]
            return final_ids
                      

        def post(self, request):
            type = request.data['type']

            prediction_weights = predict(request.data)
            bonus_weights = scrape_web_pages(type)

            final_confidence_values = list( map(add, prediction_weights, bonus_weights) )

            ids = self.get_top_results(final_confidence_values, type)

            top_locations = Location.objects.filter(pk__in=ids)

            serializer = LocationSerializer(top_locations, many=True)

            return JsonResponse(serializer.data, safe=False, status=200)