import { Component } from '@angular/core';
import {educationalDetails} from '../../assets/data/config.json'
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  events: any[];
  constructor() {
    this.events=educationalDetails;
  }

  toggleMore(event: any, type: string): void {
    event[`more${type.charAt(0).toUpperCase() + type.slice(1)}`] = !event[`more${type.charAt(0).toUpperCase() + type.slice(1)}`];
  }

}
