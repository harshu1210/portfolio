import { Component, ViewEncapsulation } from '@angular/core';
import { skills } from '../../assets/data/config.json'
@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TechstackComponent {

  events: any = [];
  constructor() {
    this.events = skills;
  }
}
