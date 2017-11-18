import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';      

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

// import { Config } from '../settings/Config';
import { Tree, Resource } from '../tree-component/classes/Tree'; 

export interface Info {
  Error: Boolean,
  Menssage: string,
}

export interface CrudData{
  getTrees(): Observable<Tree[]>,
  deleteItem(id: string): Observable<Info>,
  getByID(id: string): Observable<Tree>,
  postItem(data: Tree): Observable<Info>
}

@Injectable()
export class WebConsumerService {
  bsURL: String;
  constructor(private _http: HttpClient,) { 
    this.bsURL ="http://flask-env.zyq3kkkkdj.us-west-2.elasticbeanstalk.com/";
  }

  getTrees(): Observable<Resource> {
    return this._http.get<Resource>(this.bsURL + "trees");
  }

  deleteItem(id: string): Observable<Info> {
    return this._http.delete<Info>(this.bsURL + "tree/" + id);
  }
  
  getByID(id: string): Observable<Tree> {
    return this._http.get<Tree>(this.bsURL  + "tree/"  +  id);
  }
  
  postItem(data: Tree): Observable<Info>{
    return this._http.post<Info>(this.bsURL + "trees", data);
  }

}
