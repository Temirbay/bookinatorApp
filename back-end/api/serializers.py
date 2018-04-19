from rest_framework import serializers

from api.models import Book, Topic, Comment

class BookSerializer(serializers.ModelSerializer):
  
  class Meta:
      model = Book
      fields = "__all__"


class TopicSerializer (serializers.ModelSerializer):

    class Meta:
        model = Topic
        fields = "__all__"


class CommentSerializer (serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = "__all__"