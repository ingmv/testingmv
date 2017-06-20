import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

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

    create(pers: PersPost) {
    //create(){        
        let headers = new Headers({ 'content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(pers);
        console.log(this.uriAna+pers.empno);
        console.log({body});
        console.log(pers);
        //let str = "empno:991, ename:'test', job:'MANAGER', mgr:7839, hiredate:'1981-06-08T22:00:00Z', sal:2450, deptno:10";
        return this.http.post(this.uriAna+pers.empno, body, options)
                            .map(res => res.json());
    }
 
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

