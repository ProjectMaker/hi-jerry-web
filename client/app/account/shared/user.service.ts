import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

const API_URL = 'http://localhost:3000/user/auth';

@Injectable()
export class UserService {
  constructor(private http:Http) {

  }

  register(account:any) {
    return this.http.post(`${API_URL}/register`, account)
      .map((res:Response) => res.json())
      .catch((err:Response) => this.handleErrors(err))
  }

  signin(account:any) {
    return this.http.post(`${API_URL}/sign-in`, account)
      .map((res:Response) => res.json())
      .catch((err:Response) => this.handleErrors(err))
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}