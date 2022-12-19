import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  innerWidth: any;
  hideForMobile: boolean = true

  constructor(private breakpointObserver: BreakpointObserver,) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.hideForMobile = false;
      } else {
        // this.hideForMobile = true;
      }
    });

    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.hideForMobile = false;
      } else {
        // this.hideForMobile = true;
      }
    });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.innerWidth = window.innerWidth;
  //   if (this.innerWidth < 768) {
  //     debugger;
  //     this.hideForMobile = true;
  //   }
  // }

}
