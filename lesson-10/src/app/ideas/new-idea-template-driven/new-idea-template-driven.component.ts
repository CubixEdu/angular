import { Component, DestroyRef, signal } from '@angular/core';
import { NewIdea } from '../models/new-idea.model';
import { IdeasService } from '../ideas.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-idea-template-driven',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, FormsModule, MatProgressSpinnerModule, MatSnackBarModule],
  templateUrl: './new-idea-template-driven.component.html',
  styleUrl: './new-idea-template-driven.component.scss'
})
export class NewIdeaTemplateDrivenComponent {
  newIdea: NewIdea = {
    name: '',
    description: ''
  }

  isLoading = signal(false);

  constructor(
    private readonly ideasService: IdeasService,
    private readonly destroyRef: DestroyRef,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  save() {
    this.isLoading.set(true);

    this.ideasService.createIdea(this.newIdea).pipe(
      tap(() => this.router.navigate(['/ideas'])),
      catchError(e => {
        this.snackBar.open('Hiba történt a mentés közben', 'OK', {duration: 5000});
        throw e;
      }),
      finalize(() => this.isLoading.set(false)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

}
