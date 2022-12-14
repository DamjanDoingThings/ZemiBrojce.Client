import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Zemi_Brojche';
  userView = false;
  currentRoute: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userViewUpdate();
  }

  userViewUpdate() {
    this.router.events.subscribe((value) => {
      // console.log('current route: ', this.router.url.toString());
      if (this.router.url.toString() == '/uslugi') {
        this.userView = true;
      }
    });
  }
}
