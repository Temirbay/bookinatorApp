from django.contrib import admin

from api.models import Book, Comment, Topic

admin.site.register(Book)
admin.site.register(Comment)
admin.site.register(Topic)
