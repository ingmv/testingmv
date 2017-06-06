import{Injectable} from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnaService{

    uriAna: string;

    constructor(private http: Http){
        console.log('Ana Service');
        this.uriAna = 'https://apex.oracle.com/pls/apex/ao_test/hr/employees/';
    }

    getAna(uriStr: string = this.uriAna){
        return this.http.get(uriStr).map(res => res.json(),);        
    }

    setAna(idStr: string){
        this.http.post(this.uriAna, idStr).subscribe;
    }
}


