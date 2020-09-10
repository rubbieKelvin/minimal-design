from django.urls import path
from . import views

urlpatterns = [
    path('', views.mydesign_view, name="my-design"),
    path('workspace/', views.workspace_view, name="design-workspace"),
]
