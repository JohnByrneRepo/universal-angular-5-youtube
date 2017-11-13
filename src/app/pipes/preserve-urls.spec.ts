import { PreserveUrlsPipe } from './preserve-urls';

describe('PreserveUrlsPipe', () => {
  let pipe: PreserveUrlsPipe;

  beforeEach(() => {
    pipe = new PreserveUrlsPipe();
  });

  it('preserves urls', () => {
    expect(pipe.transform('more info: https://test.com \n'))
      .toEqual('more info: <a href="https://test.com">https://test.com</a> \n')
  });
});
