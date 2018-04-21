from rest_framework import serializers

from api.models import Book, Topic, Comment, User, Tuple

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

class UserSerializer (serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"


class TupleSerializer (serializers.ModelSerializer):

    class Meta:
        model = Tuple
        fields = "__all__"