import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  passwordError = true;
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const token = this.userService.getToken();
    if (!!token) {
      this.router.navigateByUrl('home');
    }
  }
  moviendoLogin() {
    this.router.navigateByUrl('login');
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe((data) => {
      console.log(data);
      this.userService.setToken(data.token);
    });
    console.log(this.password, this.confirmPassword, this.email);
  }
}
