import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private basUrl: string;
  constructor(
    public http: HttpClient
  ) {
    this.basUrl = 'http://localhost:3000/';

  }

  public register(userForm: any): Observable<any> {
    const url: string = this.basUrl + 'user'
    return this.http.post(url, userForm);
  }

  public login(): Observable<any> {

    const url: string = this.basUrl + 'user/';
    return this.http.get(url);

  }
}
