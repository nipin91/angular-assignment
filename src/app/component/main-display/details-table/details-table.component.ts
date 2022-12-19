import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {

  show: boolean = true;
  clicked: any;
  constructor() { }

  ngOnInit(): void {
    console.log(window.innerWidth);
  }

  changePagintation(value?: number) {
    this.clicked = value;
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

}
