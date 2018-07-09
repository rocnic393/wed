import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/module';

import { LandingComponent } from './landing/landing';
import { HeaderComponent } from './header/header';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
