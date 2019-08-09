import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  urls: string[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => this.navigationInterceptor(event));
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      if (event.url) {
        const urlArray = event.url.split('/');
        if (urlArray.length > 1) {
          this.urls = urlArray.slice(1, urlArray.length);
        } else {
          this.urls = [urlArray[0]];
        }
      }
    }
  }
}
