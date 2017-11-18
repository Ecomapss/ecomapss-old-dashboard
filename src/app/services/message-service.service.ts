import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageServiceService {
  private _listners = new Subject<any>();
  constructor() { }

  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  
  update() {
    this._listners.next();
  }
}
