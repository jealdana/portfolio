# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings

# Create your models here.

class User(models.Model):
  first_name = models.CharField(max_length=50,blank=False)
  last_name = models.CharField(max_length=50)

  def __str__(self):
      return self.first_name

class Workout(models.Model):

  exercises = models.CharField(max_length=50)
  available_skips = models.IntegerField()
  muscle_group = models.CharField(max_length=50)
  total_time = models.IntegerField()
  motivation_img_url = models.URLField()
  workout_name = models.CharField(max_length=50,blank=False)

  def __str__(self):
    return self.workout_name

  class Meta:
    db_table = ''
    managed = True
    verbose_name = 'Workout'
    verbose_name_plural = 'Workouts'

class Exercise(models.Model):
  exercise_name = models.CharField(max_length=50,blank=False)
  exercise_desc = models.CharField(max_length=50)
  exercise_reps = models.IntegerField()
  exercise_duration = models.IntegerField()

  def __str__(self):
    return self.exercise_name

  class Meta:
    db_table = ''
    managed = True
    verbose_name = 'Exercise'
    verbose_name_plural = 'Exercises'