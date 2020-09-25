import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heat-tabs',
  templateUrl: './heat-tabs.component.html',
  styleUrls: ['./heat-tabs.component.scss'],
})
export class HeatTabsComponent implements OnInit {
  @Input() daily;
  @Input() hourly;
  @Input() showCTemp;
  constructor() {}

  ngOnInit(): void {}
}
