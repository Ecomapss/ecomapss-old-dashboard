import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';      
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

// import { Config } from '../settings/Config';
import { Tree, Resource } from '../tree-component/classes/Tree'; 
import { CrudData } from './interface/restInterface';
import {Config, Info} from '../settings/Config';

@Injectable()
export class WebConsumerService {
  bsURL: String;
  moduleName: string = "trees";
  constructor(private _http: HttpClient, private _config: Config) { 
    this.bsURL = _config.getBsUrl();

  }

  getTrees(): Observable<Resource> {
    return this._http.get<Resource>(this.bsURL.concat(this.moduleName));
  }

  deleteItem(id: string): Observable<Info> {
    return this._http.delete<Info>(this.bsURL.concat(this.moduleName) + "/" + id);
  }
  
  getByID(id: string): Observable<any> {
    return this._http.get<any>(this.bsURL.concat(this.moduleName)  + "/"  +  id);
  }
  
  postItem(data: Tree): Observable<Info>{
    return this._http.post<Info>(this.bsURL.concat(this.moduleName), data);
  }

  putItem(id: string, data: Tree): Observable<Info> {
    return this._http.put<Info>(this.bsURL.concat(this.moduleName) + "/" + id, data);
  }
}
