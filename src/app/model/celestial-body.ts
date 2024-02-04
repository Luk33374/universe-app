import { KM, MKM, OrbitInDays, OrbitInclanationPrecent } from "./distance-types";

export class CelestialBody{
    protected _name: string;
    protected _diameter: KM;
    protected _orbitDiameter: MKM;
    protected _orbitLength: OrbitInDays;
    protected _orbitalInclanation: OrbitInclanationPrecent;
    
    constructor(
        name: string,
        diameter: KM,
        orbitDiameter: MKM,
        orbitLength: OrbitInDays,
        orbitInclanation: OrbitInclanationPrecent,
        ){
        this._name = name;
        this._diameter = diameter;
        this._orbitDiameter = orbitDiameter;
        this._orbitLength = orbitLength;
        this._orbitalInclanation = orbitInclanation;
    }


    public get diameter(): KM {
        return this._diameter;
    }

    public get orbitDiameter(): MKM {
        return this._orbitDiameter;
    }

    public get planetName(): string{
        return this._name;
    }

    public get orbitLength(): OrbitInDays{
        return this._orbitLength;
    }

    public get orbitalInclanation(): OrbitInclanationPrecent{
        return this._orbitalInclanation;
    }
}