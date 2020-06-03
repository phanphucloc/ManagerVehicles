import { ItemVehicleModel } from '../../model/ItemVehicleModel';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LoadingCenterDirective } from 'src/app/shares/directive/loading-center.directive';
import { Subject } from 'rxjs';
import { IItemVehicleModel } from '../../abstract/IItemVehicleModel';

@Component({
  selector: 'app-info-vehicle',
  templateUrl: './info-vehicle.component.html',
  styleUrls: ['./info-vehicle.component.scss'],
})
export class InfoVehicleComponent implements OnInit, OnDestroy {

  @ViewChild("modalbody", { static: true }) elModalBody: LoadingCenterDirective;

  public eventDestoy: Subject<String>;
  public eventClose: Subject<String>;
  public eventdismiss: Subject<String>;

  public infoVehicle: IItemVehicleModel;
  constructor(
  ) {
    this.eventClose = new Subject<String>();
    this.eventdismiss = new Subject<String>();
    this.eventDestoy = new Subject<String>();
    this.infoVehicle = new ItemVehicleModel();
  }

  ngOnInit(): void {

  }


  showloadingCenter() {
    this.elModalBody.showloadingCenter();
  }

  hideloadingCenter() {
    this.elModalBody.hideloadingCenter();
  }

  close() {
    this.eventClose.next("close");
    this.eventClose.complete();
  }

  dismiss() {
    this.eventdismiss.next("dismiss");
    this.eventdismiss.complete();
  }


  //Set value info vehicle
  setinfoVehicle(_infoVehicle: IItemVehicleModel): void {
    this.infoVehicle = _infoVehicle;
  }
  
  ngOnDestroy():void{
    this.eventDestoy.complete();
  }
}
