// modules
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { StarComponent }       from './components/star/star.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  // components
  declarations: [
    StarComponent
  ],
  // exports
  exports: [
    // angular modules
    CommonModule, FormsModule, ReactiveFormsModule,
    // components
    StarComponent
  ]
})
export class SharedModule {}
