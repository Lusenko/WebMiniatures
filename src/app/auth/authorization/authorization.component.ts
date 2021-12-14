import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../guard/auth.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly authService: AuthService) {
    this.formGroup = this.formBuilder.group({
      inputLogin: '',
      inputPass: ''
    })
  }

  lol(){
    const userName = this.formGroup.get('inputLogin')?.value;
    const userPass = this.formGroup.get('inputPass')?.value;
    this.authService.checkAuth(userName,userPass);
  }

  ngOnInit(): void {
  }

}
