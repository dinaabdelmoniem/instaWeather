import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatTabsComponent } from './heat-tabs.component';

describe('HeatTabsComponent', () => {
  let component: HeatTabsComponent;
  let fixture: ComponentFixture<HeatTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
