import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';      

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Inseto, Resource, OneInseto } from '../insetos/classes/Inseto';
import { Config, Info } from '../settings/Config';

@Injectable()
export class InsetosWebService {
  bsURL: String;
  moduleName: string = "insetos";
  constructor(private _http: HttpClient, private _config: Config) {
    this.bsURL = _config.getBsUrl();
  }

  getData(): Observable<Resource>{
    return this._http.get<Resource>(this.bsURL.concat(this.moduleName));
  }
  postData(data: Inseto): Observable<Info>{
    return this._http.post<Info>(this.bsURL.concat(this.moduleName), data);
  }

  deleteItem(id: string): Observable<Info>{
    return this._http.delete<Info>(this.bsURL.concat(this.moduleName) + "/" +id);
  }

  getByID(id: string): Observable<OneInseto>{
    return this._http.get<OneInseto>(this.bsURL.concat(this.moduleName) + "/" + id);
  }

  putItem(id: string, data: Inseto): Observable<Info>{
    return this._http.put<Info>(this.bsURL.concat(this.moduleName) + "/" + id, data);
  }
}
