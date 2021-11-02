import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: string = 'Consultant';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width:825px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.close();
      }
    });
  }
}
