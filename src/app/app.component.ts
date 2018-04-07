import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title   = 'lady';
  name    = "Eduardo";
  email   = "eduardo.gmail.com";
  webSite = "https://www.google.com.co/";
  hobbies = ['run', 'read', 'write']
}
