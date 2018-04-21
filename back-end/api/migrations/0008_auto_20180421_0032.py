# Generated by Django 2.0.4 on 2018-04-21 00:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20180421_0031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tuple',
            name='book_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to='api.Book'),
        ),
        migrations.AlterField(
            model_name='tuple',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='books', to='api.User'),
        ),
    ]