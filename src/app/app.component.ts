import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (breakpointObserver: BreakpointObserver) {
      const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }


  title = 'ECOMapss';
}
