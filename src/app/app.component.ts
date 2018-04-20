import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title       : string;
  name        : string;
  email       : string;
  webSite     : string;
  hobbies     : string[];
  showHobbies : boolean;

  constructor(){
    //apenas la pagina se ejecute se ejecuta el contructor
    this.title        = 'lady';
    this.name         = "Eduardo";
    this.email        = "eduardo.gmail.com";
    this.webSite      = "https://www.google.com.co/";
    this.hobbies      = ['run', 'read', 'write'];
    this.showHobbies  = false; 
  }

  newHobby(hobby){
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }

  toggleHobbies(){
    this.showHobbies  = !this.showHobbies;
  }
}
