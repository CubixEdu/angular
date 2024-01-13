import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Post } from '../models/post.model';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  post = signal<Post | undefined>(undefined);

  constructor(
    private readonly postService: PostService, 
    private readonly activatedRoute: ActivatedRoute,
    private readonly destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      map((params: any) => +params.id),
      switchMap((id) => this.postService.getPost(id)),
      tap(post => this.post.set(post)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
