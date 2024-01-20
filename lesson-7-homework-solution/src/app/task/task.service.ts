import { Injectable, computed, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks = signal<Task[]>([]);

  constructor() {
    this.deserializeTasks();
  }

  get tasks() {
    return this._tasks.asReadonly();
  }

  addTask(task: Task) {
    this._tasks.update(tasks => [...tasks, task]);
    
    this.serializeTasks();
  }

  markAsDone(task: Task) {
    this._tasks.update((tasks) => {
      this._tasks()[this._tasks().indexOf(task)].isDone = true;
      return [...tasks];
    });

    this.serializeTasks();
  }

  serializeTasks() {
    localStorage.setItem(`task`, JSON.stringify(this._tasks()));
  }

  deserializeTasks() {
    const tasks = localStorage.getItem(`task`);

    if(tasks) {
      this._tasks.set(JSON.parse(tasks));
    }
  }

}
