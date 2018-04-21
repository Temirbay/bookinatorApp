from django.db import models


class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class Book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)    
    genre = models.CharField(max_length=100)
    published_date = models.DateTimeField(auto_now=True)
    img = models.CharField(max_length=100, default="null")
    
    def __str__(self):
        return self.name

class Tuple (models.Model):
    user_id = models.ForeignKey(User, related_name="books", on_delete=models.CASCADE)
    book_id = models.ForeignKey(Book, related_name="users", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.book_id)


class Topic(models.Model):
    text = models.CharField(max_length=200)
    
    def __str__(self):
        return self.text

class Comment(models.Model):
    topicId = models.ForeignKey(Topic, related_name="comments", on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    username = models.CharField(max_length=100, default='null')

    def __str__(self):
        return (self.text)