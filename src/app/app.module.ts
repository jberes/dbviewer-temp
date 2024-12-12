import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { IgxListModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HammerModule,
    HttpClientModule,
    IgxButtonModule,
    IgxIconModule,
    IgxListModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
