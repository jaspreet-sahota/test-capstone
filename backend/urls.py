"""
URL configuration for project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from user.views import SignUpView, LoginView
from recommendation.views import MakeRecommendationView, GetRecommendationsFromPastData
from location.views import LocationDetailView, LocationListView
from review.views import ReviewsByLocationView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup', SignUpView.as_view(), name='signup'),
    path('api/login', LoginView.as_view(), name='login'),
    path('api/make-recommendation', MakeRecommendationView.as_view(), name='make-recommendation'),
    path('api/get-recommendations-from-past-data', GetRecommendationsFromPastData.as_view(), name='get-recommendation-from-past-data'),
    path('api/locations-all', LocationListView.as_view(), name='locations-all'),
    path('api/location-details/<int:pk>/', LocationDetailView.as_view(), name='location-detail'),  # New line for LocationDetailView
    path('api/review/<int:location_id>/', ReviewsByLocationView.as_view(), name='review-detail')
]
