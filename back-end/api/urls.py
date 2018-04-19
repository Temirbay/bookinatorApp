from django.urls import path

from api import views

urlpatterns = [
    path ('catalog/', views.catalog, name="catalog"),
    path ('topics/', views.topic_list, name="topic_list"),
    path ('topics/<int:topic_id>/comments/', views.topic_details, name="topic_details"),
]