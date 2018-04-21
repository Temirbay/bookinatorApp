from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from api.models import Book, Topic, Comment, User
from api.serializers import BookSerializer, TopicSerializer, CommentSerializer, UserSerializer, TupleSerializer

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
def mybook_list(request, user_id):
  if request.method == "GET":
    user = User.objects.get(pk=user_id)
    books = user.books.all()
    ser = TupleSerializer(books, many=True)
    return JsonResponse(ser.data, safe=False)

  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = TupleSerializer(data=data)
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
    data = JSONParser().parse(request)
    ser = CommentSerializer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
  return JsonResponse(ser.errors, status=400)



@csrf_exempt
def user_list(request):
  if request.method == "GET":
    users = User.objects.all()
    ser = UserSerializer(users, many=True)
    return JsonResponse(ser.data, safe=False)

  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = UserSerializer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
      
  return JsonResponse(ser.errors, status=400)

@csrf_exempt
def tuple_list(request):
  if request.method == "POST":
    data = JSONParser().parse(request)
    ser = TupleSerializer(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
      
  return JsonResponse(ser.errors, status=400)


@csrf_exempt
def tuple_delete(request, user_id, book_id):
  if request.method == "DELETE":
    user = User.objects.get(pk=user_id)

    obj = None 
    books = user.books.all()
    for book in books:
      print (book)
      print (book.book_id.id)
      
      print (book_id)
      if (book.book_id.id == book_id):
        obj = book

    print (books)
    print (obj)

    ser = TupleSerializer (obj)
    obj.delete();
    return JsonResponse(ser.data)
    
  return JsonResponse(ser.errors, status=400)