import { User } from "src/models/User.model";
import { UserApiService } from "./user-api.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private readonly userApiService: UserApiService
  ){}


  public registerUser(user: Partial<User>): Observable<User> {
    return this.userApiService.registerUser(user)
  }

}