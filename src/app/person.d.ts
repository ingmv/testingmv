export declare module Person {

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