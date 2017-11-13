import { FormatDatePipe } from './format-date';

describe('FormatDatePipe', () => {
  let pipe: FormatDatePipe;

  beforeEach(() => {
    pipe = new FormatDatePipe();
  });

  it('formats listing dates', () => {
    expect(pipe.transform('2009-03-06T12:00:03.000Z'))
      .toEqual('Published on Mar 6, 2009')
  });
});
