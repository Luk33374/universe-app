import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Subject } from 'rxjs';
import { Planet, PlanetOrbits } from '../model/planets-orbits';
import { MKM, OrbitInDays } from '../model/distance-types';

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
    if(this.planets) {
      this.movePlanets(this.planets, daysFromLasConunction);
    }
  }
  private movePlanets(planetsMeshesArray: BABYLON.Mesh[], daysOfSymulation: number): void{
    planetsMeshesArray.forEach((planetMesh: BABYLON.Mesh): void =>{
      const foundPlanetData = this.getPlanetData(planetMesh.name);
      planetMesh.position.z = this.calculateCoordinate(foundPlanetData, daysOfSymulation);
      planetMesh.position.x = this.calculateCoordinate(foundPlanetData, daysOfSymulation, true);
      planetMesh.position.y = planetMesh.position.z * foundPlanetData.orbitalInclanation / 100;
    });
  }

  private getPlanetData(planetName: string): Planet {
    return PlanetOrbits.GetAllPlanets()
    .filter((planet: Planet): boolean => planetName === planet.planetName)[0];
  }

  private calculateCoordinate(foundPlanetData: Planet, dayOfOrbit: number,isXCoordinate?: boolean): MKM{
    const r = foundPlanetData.orbitDiameter;
    const orbitInDays = foundPlanetData.orbitLength;
    if(r === 0 || orbitInDays === 0){
      return 0 as MKM;
    }
    const xMultiplayer = isXCoordinate? Math.PI/2: 0;
    const orbitPosition = Math.sin(this.getRadianOfOrbit(dayOfOrbit,orbitInDays)+ xMultiplayer) * r;
    return orbitPosition as MKM;
  }

  private getRadianOfOrbit(dayOfOrbit: number, orbitInDays: OrbitInDays): number{
    return ((dayOfOrbit%orbitInDays)/orbitInDays)*Math.PI*2;
  }
}

