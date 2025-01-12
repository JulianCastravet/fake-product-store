import { Injectable } from '@angular/core';
import { CommentsApiService } from './comments-api.service';
import { CommentDTO, UserComment } from 'src/models/UserComment.model';
import { map, Observable } from 'rxjs';
import { getRandomComments } from 'src/utils/randomizer';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private commentAPIService: CommentsApiService) {}

  getAllComments(): Observable<CommentDTO> {
    return this.commentAPIService.getAllComments();
  }

  getLimitedComments(limit: number): Observable<UserComment[]> {
    return this.getAllComments().pipe(
      map((comments) => getRandomComments(comments.comments, limit))
    );
  }
}
