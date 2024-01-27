import { Injectable } from '@angular/core';
import { Idea } from './models/idea.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdeasService {
  private readonly BASE_URL = `${environment.baseUrl}/ideas`;

  constructor(
    private readonly http: HttpClient
  ) { }

  listIdeas() {
    return this.http.get<Idea[]>(`${this.BASE_URL}`);
  }

  upvoteIdea(idea: Idea) {
    return this.http.patch<{id: string}>(`${this.BASE_URL}/${idea.id}/upvote`, null);
  }

  downvoteIdea(idea: Idea) {
    return this.http.patch<{id: string}>(`${this.BASE_URL}/${idea.id}/downvote`, null);
  }

  deleteIdea(idea: Idea) {
    return this.http.delete<{id: string}>(`${this.BASE_URL}/${idea.id}`);
  }
}
