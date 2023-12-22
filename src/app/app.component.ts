import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as CONFIG from '../assets/data/config.json';
import { CommonService } from './services/common/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  menu: MenuItem[] | undefined;
  screenOrientation: string = '';
  position: 'bottom' | 'top' | 'left' | 'right' = 'left';
  height: any;
  width: any;
  items: MenuItem[] | undefined;

  constructor(private commonService: CommonService) {
    this.commonService.setFlag(true);
  }
  @ViewChild('container', { static: false }) container!: ElementRef;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/home'
      },
      {
        label: 'Work',
        routerLink: '/'
      },
      {
        label: 'Projects',
      },
      {
        label: 'TechStack',
      },
      {
        label: 'Quit',
      }
    ];
    for (let i = 0; i < CONFIG.dockMenu.length; i++) {
      const decodedUrl = atob(CONFIG.dockMenu[i].link);
      CONFIG.dockMenu[i].link = decodeURIComponent(decodedUrl);
    }
  }

  ngAfterViewInit() {
    this.getScreenOrientation()
    this.menu = CONFIG.dockMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.getScreenOrientation()
  }

  getScreenOrientation(): void {
    const mediaQuery = window.matchMedia('(orientation: portrait)');
    const divElement = this.container!.nativeElement;
    this.width = divElement.offsetWidth;
    this.height = divElement.offsetHeight;
    if (mediaQuery.matches) {
      this.screenOrientation = 'Portrait';
      this.position = 'bottom';
      this.height = this.height - 98;
      this.height = this.height;
    } else {
      this.screenOrientation = 'Landscape';
      this.position = 'left'
      this.width = this.width - 98;
      this.width = this.width;
    }
  }
}
