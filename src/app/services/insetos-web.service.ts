import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';      

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Inseto, Resource, OneInseto } from '../insetos/classes/Inseto';
import { Config, Info } from '../settings/Config';

@Injectable()
export class InsetosWebService {
  bsURL: String;
  constructor(private _http: HttpClient, private _config: Config) {
    this.bsURL = _config.getBsUrl();
  }

  getData(): Observable<Resource>{
    return this._http.get<Resource>(this.bsURL + "insetos");
  }

  postData(data: Inseto): Observable<Info>{
    return this._http.post<Info>(this.bsURL + "insetos", data);
  }

  deleteItem(id: string): Observable<Info>{
    return this._http.delete<Info>(this.bsURL+"inseto/"+id);
  }

  getByID(id: string): Observable<OneInseto>{
    return this._http.get<OneInseto>(this.bsURL + "inseto/"+id);
  }

  putItem(id: string, data: Inseto): Observable<Info>{
    return this._http.put<Info>(this.bsURL + "inseto/" + id, data);
  }

  patchItem(id: string, data: any): Observable<Info>{
    return this._http.patch<Info>(this.bsURL + "id", data);
  }
  
}
