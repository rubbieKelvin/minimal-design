from django.shortcuts import render
from minimaldesign.settings import DEBUG

# Create your views here.
def mydesign_view(request):
    return render(request, "mydesign.html", dict(
        debug=DEBUG
    ))

def workspace_view(request):
    return render(request, "workspace.html", dict(
        debug=DEBUG
    ))