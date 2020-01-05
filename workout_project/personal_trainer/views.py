# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
#import requests
import json
# Create your views here.

def todays_workout(request):
  #responses = json.loads(requests('https://type.fit/api/quotes'))
  return render(request, 'personal_trainer/todays_workout.html')
