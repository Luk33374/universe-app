import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButton
  ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponent {
  protected latitude = '';
  protected longitude = '';
  protected time = '';
  protected date:any = new Date();
  protected latitudeRegex = /[NSns][0-9]{1,2}[.][0-9]{6}/g;
  protected longitudeRegex = /[EWew][0-9]{1,2,3}[.][0-9]{6}/g;

  private conunctionDate = Date.parse('01 Jan 1970 00:00:00 GMT');
  
  protected onClick(): void{
    const milisecondsToDaysConvertionRate = 86400000;
    const dateDiff = Math.abs(this.date - this.conunctionDate)/ milisecondsToDaysConvertionRate;
    console.log(dateDiff);
  }
}
