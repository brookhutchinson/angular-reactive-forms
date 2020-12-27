// angular modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';

// features modules
import { ProductModule }    from './products/product.module';

// components
import { AppComponent }     from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  // components
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // modules
  imports: [
    // angular modules
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // welcome route
      { path: 'welcome', component: WelcomeComponent },
      // default route
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // wildcard route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ],
    { relativeLinkResolution: 'legacy' }),
    // feature modules
    ProductModule
  ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
