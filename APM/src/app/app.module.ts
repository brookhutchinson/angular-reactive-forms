// angular modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';

// feature modules
import { HomeModule }       from './modules/home/home.module';
import { ProductModule }    from './modules/product/product.module';

// app routing module
import { AppRoutingModule } from './app.routing.module';

// components
import { AppComponent }     from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule, HttpClientModule, RouterModule,
    // feature modules
    HomeModule, ProductModule,
    // app routing module
    AppRoutingModule
  ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
