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
  isOpen: boolean = false;
  leftPage: boolean = true;
  middlePage: boolean = false;
  rightPage: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.showProfileImage();
  }

  @HostListener('window:resize', ['$event'])
  handleResize(event?: Event): void {
    let screenWidth, screenHeight, aspect_ratio
    if (window.screen.orientation.type == 'portrait-primary') {
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;
      if (document.getElementById("aspect-ratio-wrapper")) {
        const gridFrontPage = document.getElementById("aspect-ratio-wrapper");
        if (gridFrontPage) {
          if (screenWidth >= screenHeight * 0.5) {
            gridFrontPage.style.height = screenHeight * 0.50 + "px";
            gridFrontPage.style.width = gridFrontPage.style.height
          } else {
            gridFrontPage.style.height = screenWidth + "px";
            gridFrontPage.style.width = gridFrontPage.style.height
          }
        }
      }
    } else {
      if (document.getElementById('profileContentLandscape')) {
        const element = document.getElementById('profileContentLandscape');
        if (element) {
          const computedStyle = getComputedStyle(element);
          screenWidth = parseInt(computedStyle.width);
          screenHeight = parseInt(computedStyle.height);
          if (document.getElementById("aspect-ratio-wrapper-landscape")) {
            const gridFrontPage = document.getElementById("aspect-ratio-wrapper-landscape");
            if (gridFrontPage) {
              if (screenWidth >= screenHeight) {
                gridFrontPage.style.height = screenHeight * 0.9 + "px";
                gridFrontPage.style.width = gridFrontPage.style.height
                console.log("if");
              } else {
                gridFrontPage.style.height = screenWidth + "px";
                gridFrontPage.style.width = gridFrontPage.style.height
              }
            }
          }
        }
      }
    }
  }

  showProfileImage() {
    setTimeout(() => {
      this.handleResize()
    }, 1)
    setTimeout(() => {
      this.isProfileVisible = true;
      this.cdr.detectChanges();
      this.typeText();
    }, 1000)
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

  toggleBook() {
    this.isOpen = !this.isOpen
    if (this.isOpen == true) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    setTimeout(() => {
      this.leftPage = !this.leftPage;
      this.middlePage = !this.middlePage;
      this.rightPage = !this.rightPage;
    }, 500)
  }

  close() {
    setTimeout(() => {
      this.rightPage = !this.rightPage;
      this.middlePage = !this.middlePage;
      this.leftPage = !this.leftPage;
      this.showProfileImage()
    }, 500)
  }

}
