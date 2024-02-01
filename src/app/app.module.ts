import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form-component.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormComponent,
    CanvasComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
