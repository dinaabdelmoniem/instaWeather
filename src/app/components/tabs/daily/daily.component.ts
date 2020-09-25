import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  @Input() daily;
  @Input() showCTemp;
  constructor() {}

  ngOnInit(): void {}
}
