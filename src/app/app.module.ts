import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponent } from './Shared/shared/shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './Shared/grid/grid.component';
import { SharedMobileViewComponent } from './shared-mobile-view/shared-mobile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    GridComponent,
    SharedMobileViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
