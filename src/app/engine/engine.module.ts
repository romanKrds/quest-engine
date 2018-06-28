import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EngineService} from './services/engine.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    EngineService
  ]
})
export class EngineModule { }
