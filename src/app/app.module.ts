import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResponsiveBookTemplate } from './Shared/grid/grid.component';
import { ResponsiveSharedBookTemplate } from './shared-mobile-view/shared-mobile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveBookTemplate,
    ResponsiveSharedBookTemplate
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
