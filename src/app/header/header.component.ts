import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userView = true;
  currentRoute: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userViewUpdate();
  }

  userViewUpdate() {
    this.router.events.subscribe((value) => {
      // console.log('current route: ', this.router.url.toString());
      if (this.router.url.toString() == '/uslugi') {
        this.userView = false;
      }
    });
  }
}
