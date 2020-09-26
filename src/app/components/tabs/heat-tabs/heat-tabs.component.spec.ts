import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HeatTabsComponent } from './heat-tabs.component';

describe('HeatTabsComponent', () => {
  let component: HeatTabsComponent;
  let fixture: ComponentFixture<HeatTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeatTabsComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatTabsComponent);
    component = fixture.componentInstance;
    component.showCTemp = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
