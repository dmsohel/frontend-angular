import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes = [
    {
      qid: 23,
      title: "Basic Java Quiz",
      description: 'the phrase Core Java defines the basic Java that covers the basic concept of Java programming language. ',
      maxMarks: '50',
      numberOfQuestions: '20',
      active: '',
      category: {
        title: 'Programming'
      }
    }
  ]

  constructor(private _quiz: QuizService) { }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error: any) => {
        console.log(error);
        Swal.fire('Error !', 'Error in Loading data !', 'error')
      }
    )
  }
  //deletequiz
  deleteQuiz(qid: any) {

    Swal.fire({
      icon: 'info',
      'title': 'Are you sure you want to delete the quiz?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {

      if (result.isConfirmed) {
        //delete
        this._quiz.deleteQuiz(qid).subscribe(
          (data: any) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qid);
            Swal.fire('success', 'Quiz Deleted', 'success');
          },
          (error) => {
            Swal.fire('Error !', 'Error in Deleting Quiz !', 'error')
          }
        );
      }
    })





  }
}
