import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-angular-v919';
  public infoModuleActive: any;
  constructor(
    
  ) {
   this.infoModuleActive = {
     title :""
   }
  }
  ngOnInit() {

  }


}
