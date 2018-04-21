from django.urls import path

from api import views

urlpatterns = [
    path ('topics/', views.topic_list, name="topic_list"),
    path ('topics/<int:topic_id>/comments/', views.topic_details, name="topic_details"),
    
    path ('catalog/', views.catalog, name="catalog"),
    path ('users/', views.user_list, name="user_list"),
    path ('tuples/', views.tuple_list, name="tuple_list"),
    
    path ('users/<int:user_id>/books/', views.mybook_list, name="mybook_list"),
    path ('users/<int:user_id>/books/<int:book_id>/', views.tuple_delete, name="tuple_delete"),
]