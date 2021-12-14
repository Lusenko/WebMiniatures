import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login: string = 'admin';
  pass: string = 'admin';

  authBool: boolean = false;

  checkAuth(userName: string, userPass: string){
    if(userName === this.login && userPass === this.pass){
      this.authBool = true;
    }
  }


}
