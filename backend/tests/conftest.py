import pytest

from pytest_factoryboy import register

from tests.factories import UserFactory

register(UserFactory)

@pytest.fixture
def api_client():
   from rest_framework.test import APIClient
   return APIClient()
