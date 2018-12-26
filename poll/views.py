from django.http import HttpResponse

from .models import Question, Choice


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])    

    return HttpResponse(output)

def detail(request, question_id):
    return HttpResponse("You're looking for question %s" %question_id)

def results(request, question_id):
    return HttpResponse("Result:  %s" %question_id)

def vote(request, question_id):
    return HttpResponse("Voting for question %s" %question_id)
