import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EngineModule} from './engine/engine.module';

const MODULES = [
  BrowserModule,
  EngineModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
