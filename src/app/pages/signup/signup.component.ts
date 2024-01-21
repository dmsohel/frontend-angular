import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) {}

  public user={
     username: '',
     password: '',
     firstName: '',
     lastName: '',
     email: '',
     phone: ''
  };

  ngOnInit(): void {}

  formSubmit(){

    console.log(this.user);
    if(this.user.username=='' || this.user.username== null){
      //alert("Need user to login");
      this.snack.open('Username is required !! ','',{
        duration:3000,
      });
      return;
    }

    //validate


    //adduser:userservice
     this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert('success');
        swal.fire('Woohoo!!! Successfully registered !!','Your user id is '+data.id,'success');
        },
      (error)=>{
        //error
        console.log(error);
        this.snack.open('User with this username already existed,Try again!! ','',{
          duration:3000,
        });
      })
  }
}
