// modules
import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';

// shared modules
import { SharedModule }      from './../shared/shared.module';

// components
import { WelcomeComponent }  from './components/welcome/welcome.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    CommonModule,
    // shared modules
    SharedModule
  ],
  // components
  declarations: [
    WelcomeComponent
  ],
  // exports
  exports: [
    // angular module
    CommonModule,
    // shared module
    SharedModule,
    // components
    WelcomeComponent
  ]
})
export class HomeModule {}