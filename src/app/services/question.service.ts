import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any){
    return this._http.get(`${baseurl}/question/quiz/all/${qid}`);
  }

  public getQuestionsOfQuizForTest(qid:any){
    return this._http.get(`${baseurl}/question/quiz/${qid}`);
  }

  //add question
  public addQuestion(question: any){
    return this._http.post(`${baseurl}/question/`,question);
  }

  //delete question
  public deleteQuestion(quesId:any){
    return this._http.delete(`${baseurl}/question/${quesId}`);
  }

  //eval quiz
  public evalQuiz(questions:any){
    return this._http.post(`${baseurl}/question/eval-quiz`,questions);
  }
}
