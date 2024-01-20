import { TaskPipe } from './task.pipe';

describe('TaskPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskPipe();
    expect(pipe).toBeTruthy();
  });
});
