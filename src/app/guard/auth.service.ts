import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login: string = 'admin';
  pass: string = 'admin';

  checkAuth(userName: string, userPass: string){
    if(userName === this.login && userPass === this.pass){
      sessionStorage.setItem('key','true');
      return true;
    }
    return
  }

  get auth(){
    return sessionStorage.getItem('key') !== null;
  }


}
