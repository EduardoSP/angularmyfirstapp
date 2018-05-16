//servicio
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; //observable mantiene pendiente de algun cambio

//https://jsonplaceholder.typicode.com/posts
@Injectable()

export class PostService {
    constructor(private http:Http){

    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res=>
            res.json()
        );
    }
    getFilms(){
        return this.http.get('https://swapi.co/api/films/').map(res=>
            res.json()
        );
    }

}