import { Component, DestroyRef } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { DemoService } from './demo.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  title = '';

  constructor(
    private readonly demoService: DemoService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.demoService.getTitle().pipe(
      tap(post => this.title = post.title),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  getNumber() {
    return this.demoService.getNumber();
  }
}
