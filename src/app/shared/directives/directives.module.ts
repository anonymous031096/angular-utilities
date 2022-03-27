import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLoadingDirective } from './button-loading.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const DIRECTIVES = [ButtonLoadingDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [...DIRECTIVES],
})
export class DirectivesModule {}
