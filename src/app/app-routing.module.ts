import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'page/home',
    pathMatch: 'full',
  },
  {
    path: '',
    children:[
      {
        path: "vehicle",
        loadChildren: () => import("./modules/vehicle/vehicle.module").then(m => m.VehicleModule)
      },
      {
        path: "page",
        loadChildren: () => import("./modules/page/page.module").then(m => m.PageModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: 'page/home', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
