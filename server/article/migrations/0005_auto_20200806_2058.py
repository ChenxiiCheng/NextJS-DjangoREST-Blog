# Generated by Django 3.1 on 2020-08-06 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0004_auto_20200806_2054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articlemodel',
            name='status',
            field=models.CharField(choices=[('0', 'Draft'), ('1', 'Publish'), ('2', 'Delete')], max_length=10),
        ),
    ]