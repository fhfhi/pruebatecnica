import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://reqres.in/api/';

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post(this.url + 'login', user);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.url + 'register', user);
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }

  getToken() {
    return this.cookies.get('token');
  }

  getUserLogged(): Observable<any>{
    const token = this.getToken();
    return this.http.get(this.url + 'users');
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  getUser(): Observable<any> {
    return this.http.get(this.url + 'users/2');
  }

  getUsers(): Observable<any>{
    return this.http.get(this.url + 'users?page=2');
  }

  logOut() {
    this.cookies.delete('token');
  }
}
