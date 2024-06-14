import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as base from '../assets/config/base.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isOpen:boolean = false;
  leftPage:boolean=true;
  middlePage:boolean=false;
  rightPage:boolean=false;
  displayText: string = '';
  fullText: string = 'HARSHAL CHOPADE';
  currentIndex: number = 0;
  isProfileVisible: boolean = false;
  isNameVisible: boolean = false;
  isProfessionVisible: boolean = false;
  isCurrentVisible: boolean = false;
  template1:string="contact";
  template2:string="resume";
  base:any=base;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.showProfileImage();
  }

  showProfileImage() {
     // Manually trigger change detection
    setTimeout(() => {
      this.isProfileVisible = true;
      this.cdr.detectChanges();
      this.typeText();
    }, 1000); // Delay before showing "name" text
  }

  typeText() {
    if (this.currentIndex < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), 100);
    } else {
      this.isNameVisible = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.isProfessionVisible = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.isCurrentVisible = true;
          this.cdr.detectChanges();
        }, 500);
      }, 500);
    }
  }

  toggleBook() {
    this.isOpen = !this.isOpen
    if(this.isOpen==true){
      this.open();
    }else{
      this.close();
    }
  }

  open(){
    setTimeout(()=>{
      this.leftPage=!this.leftPage;
      this.middlePage=!this.middlePage;
      this.rightPage=!this.rightPage;
    },500)
  }

  close(){
    setTimeout(()=>{
      this.rightPage=!this.rightPage;
      this.middlePage=!this.middlePage;
      this.leftPage=!this.leftPage;
    },500)
  }
}
