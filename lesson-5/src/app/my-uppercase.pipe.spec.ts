import { MyUppercasePipe } from './my-uppercase.pipe';

describe('MyUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new MyUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
