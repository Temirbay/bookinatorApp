from django.contrib import admin

from api.models import Book, Comment, Topic, User, Tuple

admin.site.register(Book)
admin.site.register(Comment)
admin.site.register(Topic)
admin.site.register(User)
admin.site.register(Tuple)
