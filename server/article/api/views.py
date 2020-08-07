from rest_framework.viewsets import ModelViewSet
from article.models import ArticleModel
from article.api.serializers import ArticleSerializer


class ArticleModelViewSet(ModelViewSet):
    queryset = ArticleModel.objects.all()
    serializer_class = ArticleSerializer
