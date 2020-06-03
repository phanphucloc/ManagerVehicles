import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';
import { InfoVehicleComponent } from './components/info-vehicle/info-vehicle.component';


const routes: Routes = [
    {
      path:'',
      data:{
        title :"Manager Vehicle",
        icon: "fa fa-car"
      },
      children: [
        {
          path:'list',
          component: ListVehicleComponent,
          data:{
             title :"List Vehicle",
             icon: null,
          }
        },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
