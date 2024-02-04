import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrbitsService {
  public planetsCreated: Subject<BABYLON.Mesh[]> = new Subject();
  private planets: BABYLON.Mesh[] | null = null;

  constructor() {
    this.planetsCreated.subscribe((planets: BABYLON.Mesh[]): void => {
      this.planets = planets;
    });
  }

  public setNewPlanetsPosition(daysFromLasConunction: number): void {

  }
}
