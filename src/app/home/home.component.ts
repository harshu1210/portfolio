import { CommonService } from './../services/common/common.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  i = 0;
  txt = 'Harshal Chopade...';
  speed = 65;
  flag!: boolean;

  constructor(private commonService: CommonService) {
    this.flag = this.commonService.getFlag();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (this.flag) {
      this.typeWriter();
    }
  }

  typeWriter() {
    const nameElement = document.getElementById('name');
    if (nameElement && this.i < this.txt.length) {
      nameElement.innerHTML += this.txt.charAt(this.i);
      this.i++;
      this.commonService.setFlag(false);
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }
}
