// angular modules
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule }         from '@angular/router';

// feature modules
import { HomeModule }             from './modules/home/home.module';

// imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData }          from './data/product-data';

// app routing module
import { AppRoutingModule }     from './app-routing.module';

// components
import { AppComponent }         from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule, HttpClientModule, RouterModule,
    // feature modules
    HomeModule,
    // app routing module
    AppRoutingModule,
    // in-memory web api module
    InMemoryWebApiModule.forRoot(ProductData)
  ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
