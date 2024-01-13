import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PostListItem } from './models/post-list-item.model';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) { }

  listPosts(): Observable<PostListItem[]> {
    return this.http.get<Post[]>(`${this.baseUrl}`).pipe(
      map(posts => posts.filter((post, index) => index < 10)),
      map(posts => posts.map(post => ({id: post.id, title: post.title})))
    );
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  deletePost(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.baseUrl}/${id}`);
  }
}
