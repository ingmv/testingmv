import { Component } from '@angular/core';
import { AnaService } from '../services/ana.service';
import { Person } from "../person.d";


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [AnaService]
})
export class UserComponent { 
  name : string;
  email: string;
  address: address;
  hobbies: string[];
  showHob: boolean;
  persons: Person.RootObject;
  persItems: Person.Item[];
  persPost: Person.Item;

  constructor (private anaService: AnaService) {
    this.name = 'Prova test';
    this.email = 'prova@test.com';
    this.address = {
        street: 'via',
        city: 'città',
        state: 'stato'    
    }
    this.hobbies = ['music', 'sport'];
    this.showHob = false; 

    this.persPost = {uri: null, rn: null, empno: null, ename: null, job: null, mgr: null, hiredate: new Date('1999-01-01'), sal: null,deptno: null};

    this.anaService.getAna().subscribe(ana => {
      this.persons = ana;
      this.persItems = ana.items;     
      }); 
    
  }

  toggleHob() {
      if(this.showHob == true) {
        this.showHob = false;
      } else {
        this.showHob = true;
      }
    }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }

  nextPers(){
    this.anaService.getAna(this.persons.next.$ref).subscribe(ana => {
      this.persItems = ana.items;
      this.persons.next = ana.next;
    });
  }

  createPers() {           
      this.anaService.create(this.persPost).subscribe(res  => {
          console.log(res);
          this.anaService.getAna().subscribe(ana => this.persItems = ana.items);
           });      
  }
  
}

interface address {
    street: string;
    city: string;
    state: string; 
}