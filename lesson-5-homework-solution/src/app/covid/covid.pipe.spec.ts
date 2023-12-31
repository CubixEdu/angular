import { CovidPipe } from './covid.pipe';

describe('CovidPipe', () => {
  it('create an instance', () => {
    const pipe = new CovidPipe();
    expect(pipe).toBeTruthy();
  });
});
