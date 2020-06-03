import { IVehicleModel,IItemVehicleModel } from '../abstract/IItemVehicleModel';

export class ItemVehicleModel  implements IItemVehicleModel{
    id : Number;
    cargo_capacity: Number;
    consumables: String ;
    cost_in_credits: Number;
    created: Date;
    crew: Number;
    edited: Date;
    length: Number;
    manufacturer: String;
    max_atmosphering_speed: Number;
    model: String;
    name: String;
    passengers: Number;
    pilots: Array<any>;
    films:  Array<String>;
    url: String;
    vehicle_class: String;
    constructor(){
        this.id = new Number();
        this.cargo_capacity = new Number();
        this.consumables  = new String() ;
        this.cost_in_credits  = new Number();
        this.created  = new Date();
        this.crew  = new Number();
        this.edited  = new Date();
        this.length  = new Number();
        this.manufacturer  = new String();
        this.max_atmosphering_speed  = new Number();
        this.model  = new String();
        this.name  = new String();
        this.passengers  = new Number();
        this.pilots  = new Array<any>();
        this.films  = new  Array<String>();
        this. url  = new String();
        this.vehicle_class  = new String();
    }
}

export class VehicleModel  implements IVehicleModel{
    count : Number;
    next: String ;
    previous: String;
    results: Array<ItemVehicleModel>;

    constructor(){
       this.results = new Array<ItemVehicleModel>();
    }
}