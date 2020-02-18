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
  msg: string = "";

  incr(): void {
    this.nclick++;
  }

  reveal(): void {
    if (this.msg == "")
      this.msg = "Look at the star";
    else
      this.msg = "";
  }
}