import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { User } from 'src/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private readonly http: HttpClient) {}

  registerUser(user: Partial<User>): Observable<User> {
    console.log(user)
    return this.http.post<User>(`${environment.apiURL}/Users`, user);
  }
}
