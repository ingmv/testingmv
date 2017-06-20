import { Component } from '@angular/core';
import { AnaService } from '../services/ana.service';


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
  persPost: PersPost;

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
      this.persPost = {
          empno : 999,
          ename : "TEST",
          job : "PROVA",
          mgr : 7839,
          hiredate : "1981-06-08T22:00:00Z",
          sal : 2222,
          deptno : 11
      };
      
      this.anaService.create(this.persPost).subscribe(res  => console.log(res));
  }
  
}

interface address {
    street: string;
    city: string;
    state: string; 
}


interface PersPost {
        empno: number;
        ename: string;
        job: string;
        mgr: number;
        hiredate: string;        
        sal: number;
        deptno: number;
} 


declare module Person {

    export interface First {
        $ref: string;
    }

    export interface Previous {
        $ref: string;
    }

    export interface Next {
        $ref: string;
    }

    export interface Uri {
        $ref: string;
    }

    export interface Item {
        uri: Uri;
        rn: number;
        empno: number;
        ename: string;
        job: string;
        hiredate: Date;
        mgr: number;
        sal: number;
        deptno: number;
        comm?: number;
    }

    export interface RootObject {
        first: First;
        previous: Previous;
        next: Next;
        items: Item[];
    }

}