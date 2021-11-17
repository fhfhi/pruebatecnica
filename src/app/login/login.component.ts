import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password = '';
  email =  '';
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
    const token = this.userService.getToken();
    if(!!token){
      this.router.navigateByUrl('home');
    }
  }
  moviendoRegistro(): void {
    this.router.navigateByUrl('register');
  }

  login(){
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(
      data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('home');
    },
    error => {
      this.router.navigateByUrl('login');
    })
  }

}
