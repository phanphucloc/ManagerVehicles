import { INavigationModel } from './../abstract/inavigation-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ActivatedRouteSnapshot } from '@angular/router';
import { NavigationModel } from '../model/navigation-model';
import { filter, isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public listRouterActive: Array<INavigationModel>;
  @Input() infoModuleActive: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.listRouterActive = new Array<NavigationModel>();
  }

  ngOnInit(): void {

    //Get the list of routers that are displayed when a user switches pages
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {

        let routerRoot = this.activatedRoute.root;

        //This value to display the navigation list
        this.listRouterActive = new Array<NavigationModel>();
        //---

        //This value is for active menu on header
        this.infoModuleActive.title = "";
        //---

        this.getListRouteActive(routerRoot);
        
      });

  }

  //Find all router active tree and push in array navigation
  getListRouteActive(roterActive: ActivatedRoute): void {

    let itemNavigation: INavigationModel;
    let baseUrl = new String();
    do {
      const childrenRoutes = roterActive.children;
      roterActive = null;

      childrenRoutes.forEach((itemRouteActive: ActivatedRoute) => {
        if (itemRouteActive.outlet === 'primary') {
          itemNavigation = new NavigationModel();

          const routeSnapshot = itemRouteActive.snapshot;
          itemNavigation = this.getDataItemRouteActive(routeSnapshot, baseUrl);

          if (itemNavigation.title) {
            this.listRouterActive.push(itemNavigation);
            //  this.listRouterActive = [...this.listRouterActive,...[itemNavigation]];
          }
          if (itemNavigation?.path) {
            baseUrl = itemNavigation.path;
          }

          roterActive = itemRouteActive;
        }
      });
    }
    while (roterActive);

  }


  //Get all data of navigation
  getDataItemRouteActive(itemActivatedRouteSnapshot: ActivatedRouteSnapshot, baseUrl: String): INavigationModel {
    let itemNavigation = new NavigationModel();

    //Get url of roter active
    if (itemActivatedRouteSnapshot.url.length > 0) {
      itemNavigation.path += '/' + baseUrl + "/" + itemActivatedRouteSnapshot.url.map(segment => segment.path);
    }
    else {
      itemNavigation.path = null;
    }

    //Get data title of roter active
    if (itemActivatedRouteSnapshot.data?.title) {
      itemNavigation.title = itemActivatedRouteSnapshot.data.title;

      if (!this.infoModuleActive?.title.trim()) {
        this.infoModuleActive.title = itemNavigation.title;
      }
      console.log(this.infoModuleActive);
    }

    //Get data title of roter active
    if (itemActivatedRouteSnapshot.data?.icon) {
      itemNavigation.icon = itemActivatedRouteSnapshot.data.icon;
    }

    return itemNavigation;
  }


  trackByFn(index: Number, item: any): Number {
    return item.id;
  }
}
