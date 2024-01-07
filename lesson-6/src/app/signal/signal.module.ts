import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalComponent } from './signal.component';
import { SignalRoutingModule } from './signal-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignalComponent
  ],
  imports: [
    CommonModule,
    SignalRoutingModule,
    FormsModule
  ]
})
export class SignalModule { }
