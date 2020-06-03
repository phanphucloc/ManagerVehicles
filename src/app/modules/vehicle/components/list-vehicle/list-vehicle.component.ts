import { Component, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../service/vehicle.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IVehicleModel, IItemVehicleModel } from '../../abstract/IItemVehicleModel';
import { VehicleModel } from '../../model/ItemVehicleModel';
import { Subject } from 'rxjs';
import { LoadingCenterDirective } from 'src/app/shares/directive/loading-center.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoVehicleComponent } from '../info-vehicle/info-vehicle.component';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss'],
})
export class ListVehicleComponent implements OnInit {
  @ViewChild("table", { static: true }) elTable: LoadingCenterDirective;

  public infoListVehicles: IVehicleModel;

  //value search
  public ObValueSearch: Subject<String>;
  public valueSearch: String;
  //--------

  constructor(
    private vehicleService: VehicleService,
    private modalService: NgbModal,
  ) {
    this.infoListVehicles = new VehicleModel();
    this.ObValueSearch = new Subject<String>();
    this.valueSearch = new String();
  }

  ngOnInit(): void {

    //Get data list vechicle
    this.getListVechicle();
    //---------

    // Get all event in view
    this.getEvent();
    //---------

  }


  // When value search change
  changeValueSearch(value: string): void {
    this.ObValueSearch.next(value)
  }


  //Get all event in view
  getEvent(): void {

    //Get event change value search
    this.ObValueSearch.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(result => {
      this.searchVechicleByName(result);
    })
    //---------

  }

  //When click icon  detail vechicle 
  toDetaiVechicle(url: String): void {
    if (url) {

      let modal = this.modalService.open(InfoVehicleComponent, { size: 'lg' });
      let componentInstance: InfoVehicleComponent = modal.componentInstance;

      //Get data value of  vehicle
      componentInstance.showloadingCenter();
      let subcription = this.vehicleService.getInfoVehiclesByUrl(url).subscribe((res: IItemVehicleModel) => {
        componentInstance.setinfoVehicle(res);
        componentInstance.hideloadingCenter();
      }, err => {
        componentInstance.hideloadingCenter();
      })

      //Get event  dismiss-close-destroy compommet modal
      componentInstance.eventClose.toPromise().then(() => {
        modal.close();
      })
      componentInstance.eventdismiss.toPromise().then((res) => {
        modal.dismiss();
      })
      componentInstance.eventDestoy.toPromise().then((res) => {
        //If user click close modal before value of api return, we need unsubcripble this observable
        subcription.unsubscribe();
      })
      //----------

    }
  }


  //When page change
  changePage(url: String): void {
    if (url) {
      this.elTable.showloadingCenter();
      this.vehicleService.getListVehiclesByUrl(url)
        .subscribe((result: IVehicleModel) => {
          console.log(result)
          this.infoListVehicles = result;
          this.elTable.hideloadingCenter();
        }, (err) => {
          this.elTable.hideloadingCenter();
        });
    }
  }




  //Get list data vechicle
  getListVechicle(): void {

    this.elTable.showloadingCenter();
    this.vehicleService.getListVehicles()
      .subscribe((result: IVehicleModel) => {
        console.log(result)
        this.infoListVehicles = result;
        this.elTable.hideloadingCenter();
      }, (err) => {
        this.elTable.hideloadingCenter();
      });

  }

  //Get list vechicle by name
  searchVechicleByName(name: String): void {

    this.elTable.showloadingCenter();
    this.vehicleService.searchItemVehiclesByName(name)
      .subscribe((result: IVehicleModel) => {
        console.log(result)
        this.infoListVehicles = result;
        this.elTable.hideloadingCenter();
      }, (err) => {
        this.elTable.hideloadingCenter();
      });

  }

  trackByFn(index: Number, item: any): Number {
    return item.id;
  }



}