import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//Para crear un servicio => ng g service services/data

@Injectable() //@Injectable() decorator tells TypeScript to emit metadata about the service
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected...');    
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts') //setting the request, return and observable
      .map(res => res.json()); //take the response and map it to a json
  }  

}
