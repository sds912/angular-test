import { User } from './../_models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getAll (): User[]{
    return USERS;
  }
}





const USERS: User[] = [
  {
    userName: "pape912",
    password: "keurm912",
    email: "senghor@gmail.com"
  },
  {
    userName: "fata912",
    password: "fata945",
    email: "fata@gmail.com"
  },
  {
    userName: "ous945",
    password: "1234",
    email: "ousmane@gmail.com"
  }
]
