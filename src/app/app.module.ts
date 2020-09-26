import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { DailyComponent } from './components/tabs/daily/daily.component';
import { HourlyComponent } from './components/tabs/hourly/hourly.component';
import { HeatTabsComponent } from './components/tabs/heat-tabs/heat-tabs.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DailyComponent,
    HourlyComponent,
    HeatTabsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
