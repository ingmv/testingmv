import { Component } from '@angular/core';
import { AnaService } from '../services/ana.service';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [AnaService]
})
export class UserComponent  { 
  name : string;
  email: string;
  address: address;
  hobbies: string[];
  showHob: boolean;
  persons: Person.RootObject;
  pers: Person.Item[];

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
      this.pers = ana.items;     
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
      this.pers = ana.items;
      this.persons.next = ana.next;
    });
  }
  
}

interface address {
    street: string;
    city: string;
    state: string; 
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







/*interface Person {
  first: {
    $ref: string;
  };
  next: {
    $ref: string;
  };
  previos: {
    $ref: string;
  };
  items: {
  deptno: number;
  empno: number;
  ename: string;
  }[];
}

interface Next {
  $ref: string;
}*/