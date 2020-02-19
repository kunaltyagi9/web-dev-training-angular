import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'app-display';

  headerFooter = false; 
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.headerFooter = (event.url !== '/login')
        }
      });
  }

}
