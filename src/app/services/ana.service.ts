import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import { Person } from "../person.d";

@Injectable()
export class AnaService{

    uriAna: string;

    constructor(private http: Http){
        console.log('Ana Service');
        this.uriAna = 'http://esxdwh32/apex/ssi/hr/employees/';
    }

    getAna(uriStr: string = this.uriAna){
        return this.http.get(uriStr).map(res => res.json(),);        
    }

    create(pers: Person.Item) {
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(pers);
        console.log('string json');
        console.log(body);
        console.log('oggetto pers');
        console.log(pers);        
        return this.http.post(this.uriAna, body, options).map(res => res.json());
    } 
}