from django.db import models
from django.template.defaultfilters import truncatechars
from django.utils.safestring import mark_safe

# Create your models here.


class ArticleModel(models.Model):
    title = models.CharField(max_length=300, verbose_name="文章标题")
    image = models.ImageField(upload_to='images')
    introduction = models.TextField(verbose_name="文章简介")
    content = models.TextField(verbose_name="文章内容")
    read_nums = models.IntegerField(default=0, verbose_name="阅读量")
    category = models.CharField(
        default='文章类型', max_length=20, verbose_name="文章类型")
    pub_date = models.DateTimeField(auto_now=True, verbose_name="发布时间")
    update_date = models.DateTimeField(auto_now=True, verbose_name="更新时间")
    is_show = models.BooleanField(default=True, verbose_name="是否显示")

    class Meta:
        verbose_name = '文章'
        verbose_name_plural = verbose_name

    @property
    def short_description(self):
        return truncatechars(self.description, 20)

    # admin里预览图片
    def admin_photo(self):
        return mark_safe('<img src="{}" width="100" />'.format(self.image.url))
    admin_photo.short_description = '文章配图'
    admin_photo.allow_tags = True

    def __str__(self):
        return self.title
