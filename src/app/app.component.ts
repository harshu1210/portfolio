import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

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

  @ViewChild('container', { static: false }) container!: ElementRef;

  ngOnInit() {
    this.menu = [
      {
        label: 'linkedIn',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png'
      },
      {
        label: 'GitHub',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'
      },
      {
        label: 'WhatsApp',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png'
      },
    ];
  }

  ngAfterViewInit() {
    this.getScreenOrientation()
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
