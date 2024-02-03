import { Component, DestroyRef, Input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { tap, catchError, finalize } from 'rxjs';
import { IdeasService } from '../ideas.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewIdea } from '../models/new-idea.model';
import { Idea } from '../models/idea.model';

@Component({
  selector: 'app-new-idea',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, MatProgressSpinnerModule, MatSnackBarModule, ReactiveFormsModule],
  templateUrl: './new-idea.component.html',
  styleUrl: './new-idea.component.scss'
})
export class NewIdeaComponent implements OnInit {
  @Input({required: false}) idea?: Idea;

  newIdea = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
  });

  isLoading = signal(false);

  constructor(
    private readonly ideasService: IdeasService,
    private readonly destroyRef: DestroyRef,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    if(this.idea) {
      this.newIdea.setValue({
        name: this.idea.name,
        description: this.idea.description
      });
    }
  }

  save() {
    this.isLoading.set(true);
    const idea: NewIdea = {name: this.newIdea.value.name!, description: this.newIdea.value.description!};

    const operation = this.idea 
      ? this.ideasService.editIdea(this.idea.id, idea)
      : this.ideasService.createIdea(idea)

    operation.pipe(
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
