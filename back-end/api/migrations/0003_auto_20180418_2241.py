# Generated by Django 2.0.4 on 2018-04-18 22:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180418_2232'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='img_url',
            new_name='img',
        ),
    ]
