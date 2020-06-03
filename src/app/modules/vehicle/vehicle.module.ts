import { NgbModal, NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';
import { VehicleService } from './service/vehicle.service';
import { InfoVehicleComponent } from './components/info-vehicle/info-vehicle.component';
import { FormsModule } from '@angular/forms';
import { LoadingCenterDirective } from 'src/app/shares/directive/loading-center.directive';


@NgModule({
  declarations: [
    ListVehicleComponent,
    InfoVehicleComponent,
    LoadingCenterDirective
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    FormsModule,
    NgbModule
  ], 
  providers:[
    VehicleService,
    NgbModal,
  ],
  entryComponents:[
    InfoVehicleComponent
  ]
})
export class VehicleModule { }
