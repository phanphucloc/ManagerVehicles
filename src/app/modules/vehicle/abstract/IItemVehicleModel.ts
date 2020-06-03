import { ItemVehicleModel } from '../model/ItemVehicleModel';


export interface IVehicleModel{
    count : Number;
    next: String ;
    previous: String;
    results: Array<ItemVehicleModel>;
  
}
export interface IItemVehicleModel{
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
}