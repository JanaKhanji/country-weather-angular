import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CityService {
    private subject = new Subject<any>();
     city: object;

    sendMessage(message: object) {
        this.subject.next( message );
    }


    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}