// modules
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';

// components
import { StarComponent } from './star.component';

@NgModule({
  // modules
  imports: [
    CommonModule
  ],
  // components
  declarations: [
    StarComponent
  ],
  // exports
  exports: [
    // modules
    CommonModule,
    FormsModule,
    // components
    StarComponent
  ]
})
export class SharedModule {}
