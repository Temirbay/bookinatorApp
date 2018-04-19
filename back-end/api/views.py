from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from api.models import Book, Topic, Comment
from api.serializers import BookSerializer, TopicSerializer, CommentSerializer

@csrf_exempt
def catalog(request):
    if request.method == "GET":
        books = Book.objects.all()
        ser = BookSerializer(books, many=True)
        return JsonResponse(ser.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        ser = BookSerializer(data=data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)

@csrf_exempt
def topic_list(request):
  if request.method == "GET":
    topics = Topic.objects.all()
    ser = TopicSerializer(topics, many=True)
    return JsonResponse(ser.data, safe=False)

  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = TopicSerializer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
      
  return JsonResponse(ser.errors, status=400)


@csrf_exempt
def topic_details(request, topic_id):
  if request.method == "GET":
    topic = Topic.objects.get(pk=topic_id)
    comments = topic.comments
    ser = CommentSerializer(comments, many=True)
    return JsonResponse(ser.data, safe=False)

  elif request.method == "POST":
    print("asdsaadasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd")
    data = JSONParser().parse(request)
    ser = CommentSerializer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
  return JsonResponse(ser.errors, status=400)