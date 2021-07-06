from rest_framework import routers
from .api import InstructorViewSet

router = routers.DefaultRouter()
router.register('api/Instructors', InstructorViewSet, 'Instructors')

urlpatterns = router.urls