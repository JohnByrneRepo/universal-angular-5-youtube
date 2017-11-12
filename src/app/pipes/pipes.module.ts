import { NgModule } from '@angular/core';
import { SanitizeUrlPipe } from './sanitize-url';
import { FormatDatePipe } from './format-date';

@NgModule({
    declarations: [
        SanitizeUrlPipe,
        FormatDatePipe
    ],
    imports: [

    ],
    exports: [
        SanitizeUrlPipe,
        FormatDatePipe
    ]
})
export class PipesModule { }