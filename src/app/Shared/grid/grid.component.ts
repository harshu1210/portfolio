import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import * as base from '../../../assets/config/backup.json'
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  base: any = base;
  page: boolean = false;
  displayText: string = '';
  fullText: string = 'HARSHAL CHOPADE';
  currentIndex: number = 0;
  isProfileVisible: boolean = false;
  isNameVisible: boolean = false;
  isProfessionVisible: boolean = false;
  isCurrentVisible: boolean = false;
  template1: string = "contact";
  template2: string = "resume";
  resumeFlag: boolean = true;
  projectsFlag: boolean = false;
  contactsFlag: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.showProfileImage();
  }

  @HostListener('window:resize', ['$event'])
  handleResize(event?: Event): void {
    let screenWidth, screenHeight, aspect_ratio
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    aspect_ratio = screenWidth / screenHeight;
    const gridFrontPage = document.getElementById("aspect-ratio-wrapper");
    if (gridFrontPage) {
      gridFrontPage.style.height = screenHeight * 0.50 + "px";
      gridFrontPage.style.width = gridFrontPage.style.height
    }
  }

  showProfileImage() {
    setTimeout(() => {
      this.handleResize();
      this.isProfileVisible = true;
      this.cdr.detectChanges();
      this.typeText();
    }, 1000);
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

  toggle() {
    this.page = !this.page;
  }

  toggleTabs(tabName: string) {
    if (tabName == "projects") {
      this.projectsFlag = true;
      this.resumeFlag = false;
      this.contactsFlag = false;
    } else if (tabName == "resume") {
      this.projectsFlag = false;
      this.resumeFlag = true;
      this.contactsFlag = false;
    } else {
      this.projectsFlag = false;
      this.resumeFlag = false;
      this.contactsFlag = true;
    }
  }

}
