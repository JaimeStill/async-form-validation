import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { Components } from './components';
import { Dialogs } from './dialogs';
import { Directives } from './directives';
import { Forms } from './forms';
import { Pipes } from './pipes';

@NgModule({
  declarations: [
    ...Components,
    ...Dialogs,
    ...Directives,
    ...Forms,
    ...Pipes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ...Components,
    ...Dialogs,
    ...Directives,
    ...Forms,
    ...Pipes,
    MaterialModule
  ]
})
export class CoreModule { }
