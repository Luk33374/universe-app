import { Component, OnInit } from '@angular/core';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit{
  constructor(private engineService: EngineService){}
  ngOnInit(): void {
    var canvas = document.getElementById('renderCanvas');  
    //@ts-ignore
    this.engineService.init3D(canvas);
  }

}
