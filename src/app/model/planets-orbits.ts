import { KM, MKM, OrbitInDays, OrbitInclanationPrecent } from "./distance-types";

export class Planet{
    private _name: string;
    private _diameter: KM;
    private _orbitDiameter: MKM;
    private _orbitLength: OrbitInDays;
    private _orbitalInclanation: OrbitInclanationPrecent;

    constructor(
        name: string,
        diameter: KM,
        orbitDiameter: MKM,
        orbitLength: OrbitInDays,
        orbitInclanation: OrbitInclanationPrecent
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
export class PlanetOrbits{
    public static readonly Sun = new Planet(
        'Sun',
        14000 as KM,
        0 as MKM,
        0 as OrbitInDays,
        0 as OrbitInclanationPrecent
        );
    public static readonly Mercury = new Planet(
        'Mercury',
        4879 as KM,
        57.9 as MKM,
        88 as OrbitInDays,
        7 as OrbitInclanationPrecent
        );
    public static readonly Venus = new Planet(
        'Venus',
        12104 as KM,
        108.2 as MKM,
        224.7 as OrbitInDays,
        3.4 as OrbitInclanationPrecent
        );
    public static readonly Earth = new Planet(
        'Earth',
        12756 as KM,
        149.6 as MKM,
        365.2 as OrbitInDays,
        0 as OrbitInclanationPrecent
        );
    public static readonly Mars = new Planet(
        'Mars',
        6792 as KM,
        228 as MKM,
        687 as OrbitInDays,
        1.8 as OrbitInclanationPrecent
        );
    public static readonly Jupiter = new Planet(
        'Jupiter',
        142984 as KM,
        778.5 as MKM,
        4331 as OrbitInDays,
        1.3 as OrbitInclanationPrecent
        );
    public static readonly Saturn = new Planet(
        'Saturn',
        120536 as KM,
        1432 as MKM,
        10747 as OrbitInDays,
        2.5 as OrbitInclanationPrecent
        );
    public static readonly Uranus = new Planet(
        'Uranus',
        51118 as KM,
        2867 as MKM,
        30589 as OrbitInDays,
        0.8 as OrbitInclanationPrecent
        );
    public static readonly Neptune = new Planet(
        'Neptune',
        49528 as KM,
        4515 as MKM,
        59800 as OrbitInDays,
        1.8 as OrbitInclanationPrecent
        );
    public static GetAllPlanets(): Planet[]{
        return [this.Sun, this.Mercury,this.Venus,this.Earth,this.Mars,this.Jupiter,this.Saturn,this.Uranus,this.Neptune];
    }
}