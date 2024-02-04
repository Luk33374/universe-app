import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Planet, PlanetOrbits } from '../model/planets-orbits';
import { MKM, OrbitInDays } from '../model/distance-types';
import { OrbitsService } from './orbits.service';
import { CelestialBody } from '../model/celestial-body';
import { Moon } from '../model/moon';
@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private orbitService: OrbitsService) {}
  
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
    this.createCelestialBodies(scene);
    return scene;
  }

  private createCelestialBodies(scene: BABYLON.Scene): void{
    let planetsMeshesArray: BABYLON.Mesh[] = [];
    let moonsMeshArray: BABYLON.Mesh[] = [];
    PlanetOrbits.GetAllPlanets().forEach((planet: Planet): void => {
      const planetMesh = this.createCelestialBody(planet, scene);
      planetMesh.position.x = planet.orbitDiameter;
      planetsMeshesArray.push(planetMesh);
      if(planet.moons.length > 0) {
        const moonMesh = this.createMoons(planet.moons, planet.orbitDiameter, scene);
        moonsMeshArray.push(...moonMesh);
      }
    });
    this.orbitService.planetsCreated.next(planetsMeshesArray);
  }

  private createMoons(moons: Moon[], planetOrbitDiameter: MKM, scene: BABYLON.Scene): BABYLON.Mesh[]{
    const moonsMeshArray: BABYLON.Mesh[] = [];
    moons.forEach((moon: Moon): void => {
      const moonMesh = this.createCelestialBody(moon, scene);
      moonMesh.position.x = (planetOrbitDiameter + moon.orbitDiameter);
      moonsMeshArray.push(moonMesh);
    })

    return moonsMeshArray;
  }

  private createCelestialBody(celesialBody: CelestialBody, scene: BABYLON.Scene): BABYLON.Mesh{
    return BABYLON.Mesh.CreateSphere(
      celesialBody.planetName, 
      16, 
      celesialBody.diameter / 1000, 
      scene, 
      false, 
      BABYLON.Mesh.FRONTSIDE
      );
  }
}