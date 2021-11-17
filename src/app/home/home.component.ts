import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public page: number;
  users: User[] = [];
  userLogged: User = {
    email: '',
    id: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };
  constructor(public userService: UserService, public router: Router) {
    this.page = 0;
  }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    const token = this.userService.getToken();
    if(!token){
      this.router.navigateByUrl('login');
    }
    this.userService.getUser().subscribe((d) => {
      this.userLogged = d.data as User;
    });
    this.userService.getUsers().subscribe((d)=> {
      this.users = d.data as User[];
    })
  }

  logOut() {
    this.userService.logOut();
    this.router.navigateByUrl('login');
  }
  cambiarPagina(e: number){
    this.page = e;
  }
}
