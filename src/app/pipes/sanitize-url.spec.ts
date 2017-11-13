import { SanitizeUrlPipe } from './sanitize-url';
import { Pipe, PipeTransform } from '@angular/core';

describe('SanitizeUrlPipe', () => {
  let pipe: SanitizeUrlPipe;

  beforeEach(() => {
    pipe = new SanitizeUrlPipe();
  });

  xit('sanitizes urls', () => {
    expect(pipe.transform('u7K72X4eo_s'))
      .toEqual({
        'changingThisBreaksApplicationSecurity': 'https://www.youtube.com/embed/u7K72X4eo_s'
      })
  });
});
