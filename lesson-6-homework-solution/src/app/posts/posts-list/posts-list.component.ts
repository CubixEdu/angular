import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { PostListItem } from '../models/post-list-item.model';
import { PostService } from '../post.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent implements OnInit {
  posts = signal<PostListItem[]>([]);

  constructor(
    private readonly postService: PostService,
    private readonly destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.postService.listPosts().pipe(
      tap(posts => this.posts.set(posts)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  deletePost(id: number) {
    this.postService.deletePost(id).pipe(
      tap(() => this.posts.set(this.posts().filter(post => post.id !== id))),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe()
  }
}
