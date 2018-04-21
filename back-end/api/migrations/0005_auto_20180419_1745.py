# Generated by Django 2.0.4 on 2018-04-19 17:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20180419_0205'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='username',
            field=models.CharField(default='null', max_length=100),
        ),
        migrations.AlterField(
            model_name='comment',
            name='topicId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='api.Topic'),
        ),
    ]