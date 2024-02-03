import { Injectable, PLATFORM_ID } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Planet, PlanetOrbits } from '../model/planets-orbits';
import { MKM, OrbitInDays } from '../model/distance-types';
@Injectable({
  providedIn: 'root'
})
export class EngineService {
  
  public init3D(canvas: HTMLElement): void{
    //@ts-ignore
     var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
     // call the createScene function
     var scene = this.createScene(canvas, engine);
     // run the render loop
     engine.runRenderLoop(function(){
         scene.render();
     });
     // the canvas/window resize event handler
     window.addEventListener('resize', function(){
         engine.resize();
     });
  }

  private createScene(canvas: HTMLElement, engine: BABYLON.Engine): BABYLON.Scene{
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    this.createPlanets(scene);
    return scene;
  }

  private createPlanets(scene: BABYLON.Scene): BABYLON.Mesh[]{
    let planetsMeshesArray: BABYLON.Mesh[] = [];
    PlanetOrbits.GetAllPlanets().forEach((planet: Planet): void => {
      const planetMesh = BABYLON.Mesh.CreateSphere(
        planet.planetName, 
        16, 
        planet.diameter / 1000, 
        scene, 
        false, 
        BABYLON.Mesh.FRONTSIDE
        );
        planetMesh.position.x = planet.orbitDiameter;
        planetsMeshesArray.push(planetMesh);
    });
    this.movePlanets(planetsMeshesArray);
    return planetsMeshesArray;
  }

  private movePlanets(planetsMeshesArray: BABYLON.Mesh[]): void{
    planetsMeshesArray.forEach((planetMesh: BABYLON.Mesh): void =>{
      const foundPlanetData = this.getPlanetData(planetMesh.name);
      const daysOfSymulation = 270;
      planetMesh.position.z = this.calculateCoordinate(foundPlanetData, daysOfSymulation);
      planetMesh.position.x = this.calculateCoordinate(foundPlanetData, daysOfSymulation, true);
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
