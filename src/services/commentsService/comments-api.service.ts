import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentDTO } from 'src/models/UserComment.model';

@Injectable({ providedIn: 'root' })
export class CommentsApiService {
  constructor(private http: HttpClient) {}

  public getAllComments(): Observable<CommentDTO> {
    return this.http.get<CommentDTO>('https://dummyjson.com/comments');
  }
}
