import { CelestialBody } from "./celestial-body";
import { KM, MKM, OrbitInDays, OrbitInclanationPrecent } from "./distance-types";
import { Moon } from "./moon";

export class Planet extends CelestialBody{
    protected _moons: Moon[] = [];

    constructor(
        name: string,
        diameter: KM,
        orbitDiameter: MKM,
        orbitLength: OrbitInDays,
        orbitInclanation: OrbitInclanationPrecent,
        moons?: Moon[]
        ){
            super(name, diameter, orbitDiameter, orbitLength, orbitInclanation);
            if(moons) {
                this._moons = moons;
            }
    }

    public get moons(): Moon[]{
        return this._moons;
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
    private static readonly Moon = new Moon(
            'Moon',
            3475 as KM,
            0.384 as MKM,
            27.3 as OrbitInDays,
            5.1 as OrbitInclanationPrecent
        );
    public static readonly Earth = new Planet(
        'Earth',
        12756 as KM,
        149.6 as MKM,
        365.2 as OrbitInDays,
        0 as OrbitInclanationPrecent,
        [this.Moon]
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