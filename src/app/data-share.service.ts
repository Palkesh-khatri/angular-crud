import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  myBehaviorSubject: Subject<any> = new Subject<any>();
}
