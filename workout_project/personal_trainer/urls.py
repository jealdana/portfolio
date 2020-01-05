from django.conf.urls import url, include
from . import views

urlpatterns = [
  url('',views.todays_workout,name='todays_workout')
]
