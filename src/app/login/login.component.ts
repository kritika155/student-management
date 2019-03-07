import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
validate(email,password){
  if (email.value ==password.value) {
      
  } else {
      alert('Please enter correct username or password!');
      return false;
  } 
}
  constructor() { }

  ngOnInit() {
  }

}
