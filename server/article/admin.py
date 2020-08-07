from django.contrib import admin
from .models import ArticleModel
# Register your models here.


class ArticleAdmin(admin.ModelAdmin):
    fields = ('image', 'title', 'introduction', 'read_nums', 'category', 'content',
              'pub_date', 'update_date', 'is_show', 'admin_photo')

    list_display = [
        'admin_photo',
        'title',
        'introduction',
        'category',
        'read_nums',
        'pub_date',
        'update_date',
        'is_show'
    ]

    list_display_links = [
        'title'
    ]

    list_filter = [
        'title',
        'category'
    ]

    date_hierarchy = 'pub_date'

    readonly_fields = ('pub_date', 'update_date', 'admin_photo')


admin.site.register(ArticleModel, ArticleAdmin)
