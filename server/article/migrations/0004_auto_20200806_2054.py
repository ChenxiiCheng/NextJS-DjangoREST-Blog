# Generated by Django 3.1 on 2020-08-06 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_auto_20200806_2046'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlemodel',
            name='title',
            field=models.CharField(max_length=200, verbose_name='文章标题'),
        ),
    ]