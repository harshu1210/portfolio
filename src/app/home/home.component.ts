import { AfterViewInit, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  i = 0;
  txt = 'Harshal Chopade...';
  speed = 65;
  second:boolean=false;

  @ViewChild('name', { static: false }) name!: ElementRef;

  constructor(private renderer: Renderer2,private zone: NgZone){

  }
  ngOnInit(): void {
    this.typeWriter();
  }

  ngAfterViewInit(){
    this.typeWriter();
  }

  typeWriter() {
    const nameElement = document.getElementById('name');
    if (nameElement && this.i < this.txt.length) {
      nameElement.innerHTML += this.txt.charAt(this.i);
      this.i++;
      if(this.i==this.txt.length-1){
        this.second=true;
        console.log(this.second)
      }
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }
}
