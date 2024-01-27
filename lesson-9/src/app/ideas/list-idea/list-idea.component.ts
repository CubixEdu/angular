import { Component, DestroyRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { Idea } from '../models/idea.model';
import { IdeasService } from '../ideas.service';
import { switchMap, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-idea',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatBadgeModule],
  templateUrl: './list-idea.component.html',
  styleUrl: './list-idea.component.scss'
})
export class ListIdeaComponent {
  ideas: Idea[] = [];

  constructor(
    private readonly ideasService: IdeasService,
    private readonly destroyRef: DestroyRef
  ) {
    this.listIdeas().subscribe();
  }

  listIdeas() {
    return this.ideasService.listIdeas().pipe(
      tap(ideas => this.ideas = ideas),
      takeUntilDestroyed(this.destroyRef)
    );
  }

  upvoteIdea(idea: Idea) {
    this.ideasService.upvoteIdea(idea).pipe(
      switchMap(() => this.listIdeas()),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  downvoteIdea(idea: Idea) {
    this.ideasService.downvoteIdea(idea).pipe(
      switchMap(() => this.listIdeas()),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  deleteIdea(idea: Idea) {
    this.ideasService.deleteIdea(idea).pipe(
      switchMap(() => this.listIdeas()),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

}
