import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { TechstackComponent } from './techstack/techstack.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'education', component:EducationComponent},
  { path:'techStack', component:TechstackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
