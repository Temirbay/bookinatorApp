# Generated by Django 2.0.4 on 2018-04-18 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='img_url',
            field=models.CharField(default='null', max_length=100),
        ),
    ]
