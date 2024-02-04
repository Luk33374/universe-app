import { CelestialBody } from "./celestial-body";
import { KM, MKM, OrbitInDays, OrbitInclanationPrecent } from "./distance-types";

export class Moon extends CelestialBody{
    constructor(
        name: string,
        diameter: KM,
        orbitDiameter: MKM,
        orbitLength: OrbitInDays,
        orbitInclanation: OrbitInclanationPrecent
    ){
        super(name, diameter, orbitDiameter, orbitLength, orbitInclanation);
    }
}