import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Fossil, ResourceFossil, OneFossil } from '../fosseis/classes/Fossil';
import { Config, Info } from '../settings/Config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FosseisWebService {
  bsURL: String;
  moduleName: string = "fosseis";
  constructor(private _http: HttpClient, private _config: Config) {
    this.bsURL = _config.getBsUrl();
  }

  getData(): Observable<ResourceFossil>{
    return this._http.get<ResourceFossil>(this.bsURL.concat(this.moduleName));
  }

  postData(data: Fossil): Observable<Info>{
    return this._http.post<Info>(this.bsURL.concat(this.moduleName), data);
  }

  deleteItem(id: string): Observable<Info>{
    return this._http.delete<Info>(this.bsURL.concat(this.moduleName) + "/"+id);
  }

  getByID(id: string): Observable<any>{
    return this._http.get<any>(this.bsURL.concat(this.moduleName) + "/"+id);
  }

  putItem(id: string, data: Fossil): Observable<Info>{
    return this._http.put<Info>(this.bsURL.concat(this.moduleName) + "/" + id, data);
  }

  patchItem(id: string, data: any): Observable<Info>{
    return this._http.patch<Info>(this.bsURL.concat(this.moduleName) + "/" + id, data);
  }



}
