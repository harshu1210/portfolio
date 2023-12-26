import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { TechstackComponent } from './techstack/techstack.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    TechstackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    DockModule,
    MenubarModule,
    TimelineModule,
    CardModule,
    ChipModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
