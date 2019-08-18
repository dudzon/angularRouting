import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  logIn() {
    this.loggedIn = true;
  }
  logOut() {
    this.loggedIn = false;
  }
  isAuthenticated() {
    const promise = new Promise((res, reject) => {
      setTimeout(() => {
        res(this.loggedIn);
      }, 1000);
    });
    return promise;
  }
  constructor() { }
}
