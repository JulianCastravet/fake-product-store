interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface UserComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
export interface CommentDTO {
  comments: UserComment[];
  total: number;
  skip: number;
}
