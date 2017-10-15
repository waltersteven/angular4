import { Component, OnInit } from '@angular/core';
//bringing the service to the component
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //name = 'Walter';
  //name:any;
  name:string;
  age:number;
  email:string;
  address:Address;
  //hobbies: any[];
  hobbies: string[]; //array of strings
  posts: Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { //injecting the service as a dependency: dataService (anyname)
    console.log('constructor ran...');
    
   }
   
  ngOnInit() { //run when the component is initialized
    console.log('ngOnInit ran...');
    
    this.name = 'Walter Steven';
    this.age = 20;
    this.address={
      street:'50 Main st',
      city: 'Boston',
      state:'MA'
    }
    this.hobbies = ['Write code', 'watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => { //getPosts returns an observable, que need to 'subscribe' to it
      //console.log(posts);
      this.posts = posts;     
    });
  }

  onClick(){
    this.name = 'Jhon Fernandez';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby); //add value at the beginning
    return false;
    
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit; //if its true we set it to false & viceversa
  }
}

//Podría ir en otro file
interface Address{
  street:string;
  city:string;
  state:string;
}

interface Post{
  id: number,
  title: string,
  body:string,
  userId: number
}
