import { INavigationModel } from '../abstract/inavigation-model';

export class NavigationModel implements INavigationModel{
    path : String;
    title: String;
    icon: String;
    constructor(){
      this.path = new String();
    }
}