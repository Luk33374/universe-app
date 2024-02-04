import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { Planet, PlanetOrbits } from '../model/planets-orbits';
import { MKM, OrbitInDays } from '../model/distance-types';
import { OrbitsService } from './orbits.service';
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
    this.createPlanets(scene);
    return scene;
  }

  private createPlanets(scene: BABYLON.Scene): void{
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
    this.orbitService.planetsCreated.next(planetsMeshesArray);
    // this.movePlanets(planetsMeshesArray);
  }
}