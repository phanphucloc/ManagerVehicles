import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'
import { IVehicleModel, IItemVehicleModel } from '../abstract/IItemVehicleModel';
@Injectable(
  // {providedIn: 'root'}
)
export class VehicleService {

  //Base link API
  private baseUrl = environment.baseURl + "vehicles/";

  constructor(
    private httpClient: HttpClient
  ) {
  }



  /**
    * This function will retrieve a list of vehicles
    * returns the response body as a list of type IVehicleModel .

  */
  getListVehicles(): Observable<IVehicleModel> {

    let url = this.baseUrl;
    return this.httpClient.get(url).pipe(
      map((res: IVehicleModel) => res),
      take(1)
    )

  }


  /**
  * This function will retrieve a list of vehicles based on the condition that the name of the vehicle
  * returns the response body as a list of type IVehicleModel .

  * @param url     The url api of the list vehicle y
  */
  getListVehiclesByUrl(url): Observable<IVehicleModel> {
    return this.httpClient.get(url).pipe(
      map((res: IVehicleModel) => res),
      take(1)
    )
  }





  /**
    * This function will retrieve all information of the vehicle
    * returns the response body as a item of type IVehicleModel .
    
    * @param id     id of vehicles want to get information
  */
  getInfoVehiclesById(id): Observable<IItemVehicleModel> {
    let url = this.baseUrl + "/" +id;
    return this.httpClient.get(url).pipe(
      map((res: IItemVehicleModel) => res),
      take(1)
    )
  }




  /**
   * This function will retrieve all information of the vehicle
   * returns the response body as a item of type IVehicleModel .
   
   * @param url     url api 
 */
  getInfoVehiclesByUrl(url): Observable<IItemVehicleModel> {
    return this.httpClient.get(url).pipe(
      map((res: IItemVehicleModel) => res),
      take(1)
    )
  }




  /**
    * This function will retrieve a list of vehicles based on the condition that the name of the vehicle
    * returns the response body as a list of type IVehicleModel .

    * @param keyword     The name of the car you want to find
  */
  searchItemVehiclesByName(keyword: String): Observable<IVehicleModel> {
    let url = this.baseUrl + `?search=${keyword}`;
    return this.httpClient.get(url).pipe(
      map((res: IVehicleModel) => res),
      take(1)
    )
  }
}
