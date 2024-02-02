import { KM, MKM } from "./distance-types";

export class Planet{
    private _diameter: KM;
    private _orbitDiameter: MKM;

    constructor(diameter: KM, orbitDiameter: MKM){
        this._diameter = diameter;
        this._orbitDiameter = orbitDiameter;
    }

    public get diameter(): KM {
        return this._diameter;
    }

    public get orbitDiameter(): MKM {
        return this._orbitDiameter;
    }
}
export class PlanetOrbits{
    public static readonly Mercury = new Planet(4879 as KM,57.9 as MKM);
    public static readonly Venus = new Planet(12104 as KM,108.2 as MKM);
    public static readonly Earth = new Planet(12756 as KM,149.6 as MKM);
    public static readonly Mars = new Planet(6792 as KM,228 as MKM);
    public static readonly Jupiter = new Planet(142984 as KM,778.5 as MKM);
    public static readonly Saturn = new Planet(120536 as KM,1432 as MKM);
    public static readonly Uran = new Planet(51118 as KM,2867 as MKM);
    public static readonly Neptune = new Planet(49528 as KM,4515 as MKM);
}