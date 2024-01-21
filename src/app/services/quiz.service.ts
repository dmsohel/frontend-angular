import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseurl}/quiz/`)
  }

  //add quiz
  public addQuiz(quiz:any){
    return this._http.post(`${baseurl}/quiz/`,quiz);
  }

  //delete quiz
  public deleteQuiz(qid:any){
    return this._http.delete(`${baseurl}/quiz/${qid}`);
  }

  //get the single quiz
  public getQuiz(qid:any){
    return this._http.get(`${baseurl}/quiz/${qid}`);
  }

  //update quiz
  public updateQuiz(quiz:any){
    return this._http.put(`${baseurl}/quiz/`,quiz);
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid:any){
    return this._http.get(`${baseurl}/quiz/category/${cid}`);
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this._http.get(`${baseurl}/quiz/active`);
  }

  //get active quizzes of categories
  public getActiveQuizzesOfCategory(cid:any){
    return this._http.get(`${baseurl}/quiz/active/category/${cid}`);
  }
}
