import { Component } from '@angular/core';
import {PostService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[PostService]
})
export class AppComponent {
  title       : string;
  name        : string;
  email       : string;
  webSite     : string;
  hobbies     : string[];
  showHobbies : boolean;
  posts       : Ipost[];
  films       : Ifilms[];

  constructor(private postService : PostService){
    //apenas la pagina se ejecute se ejecuta el contructor
    this.title        = 'Hola';
    this.name         = "Eduardo";
    this.email        = "eduardo.gmail.com";
    this.webSite      = "https://www.google.com.co/";
    this.hobbies      = ['run', 'read', 'write'];
    this.showHobbies  = false;
    this.postService.getPosts().subscribe(posts=>{
      this.posts = posts;
    });
    
    this.postService.getFilms().subscribe(films=>{
      this.films = films["results"];
    }); 
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

interface Ipost{
  id     : string;
  title  : string;
}

interface Ifilms{
  title     : string;
  director  : string;
}

