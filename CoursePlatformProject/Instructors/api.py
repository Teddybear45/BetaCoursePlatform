
from rest_framework import viewsets, permissions
from .models import Instructor
from .serializers import InstructorSerializer

# Instructor Viewset
# Create, Read, Update, Delete API

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InstructorSerializer
