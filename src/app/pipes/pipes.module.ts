import { NgModule } from '@angular/core';
import { FormatDatePipe } from './format-date';
import { PreserveUrlsPipe } from './preserve-urls';
import { SanitizeUrlPipe } from './sanitize-url';

@NgModule({
  declarations: [
    FormatDatePipe,
    PreserveUrlsPipe,
    SanitizeUrlPipe
  ],
  imports: [

  ],
  exports: [
    FormatDatePipe,
    PreserveUrlsPipe,
    SanitizeUrlPipe
  ]
})
export class PipesModule { }
