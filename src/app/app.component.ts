import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  nclick: number = 0;
  hidden: boolean = true;

  incr(): void {
    this.nclick++;
  }

  reveal(): void {
    this.hidden = !this.hidden;
  }
}