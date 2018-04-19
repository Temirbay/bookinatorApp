from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)    
    genre = models.CharField(max_length=100)
    published_date = models.DateTimeField(auto_now=True)

    img = models.CharField(max_length=100, default="null")
    
    def __str__(self):
        return self.name

class Topic(models.Model):
    text = models.CharField(max_length=200)
    
    def __str__(self):
        return self.text

class Comment(models.Model):
    topicId = models.ForeignKey(Topic, related_name="comments", on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return (self.text)