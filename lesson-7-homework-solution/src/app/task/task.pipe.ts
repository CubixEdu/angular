import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'task',
  standalone: true
})
export class TaskPipe implements PipeTransform {

  transform(task: Task): string {
    return `${task.name} - ${task.description} (${task.creator})`;
  }

}
