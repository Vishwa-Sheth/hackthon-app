import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertTextPipe } from './error-messages.pipe';



@NgModule({
  declarations: [
        ConvertTextPipe
    ],
  imports: [
    CommonModule
    ],
    exports: [
        ConvertTextPipe
    ]
})
export class PipesModule { }
