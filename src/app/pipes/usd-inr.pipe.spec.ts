// please note this directory is not a component, it just a pipe
import { UsdInrPipe } from './usd-inr.pipe';

describe('UsdInrPipe', () => {
  it('create an instance', () => {
    const pipe = new UsdInrPipe();
    expect(pipe).toBeTruthy();
  });
});
