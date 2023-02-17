import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tw-widget',
  templateUrl: './tw-widget.component.html',
})
export class TwWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load();
  }
}
