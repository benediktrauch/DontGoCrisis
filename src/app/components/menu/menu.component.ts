import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @ViewChild('appMenu') menuElement: ElementRef;

  isScroll = false;

  menuPosition: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 100) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }

}
