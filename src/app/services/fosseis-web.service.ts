import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Fossil, ResourceFossil, OneFossil } from '../fosseis/classes/Fossil';
import { Config, Info } from '../settings/Config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FosseisWebService {
  bsURL: String;
  constructor(private _http: HttpClient, private _config: Config) {
    this.bsURL = _config.getBsUrl();
  }

  getData(): Observable<ResourceFossil>{
    return this._http.get<ResourceFossil>(this.bsURL + "fosseis");
  }

  postData(data: Fossil): Observable<Info>{
    return this._http.post<Info>(this.bsURL + "fosseis", data);
  }

  deleteItem(id: string): Observable<Info>{
    return this._http.delete<Info>(this.bsURL+"fossil/"+id);
  }

  getByID(id: string): Observable<OneFossil>{
    return this._http.get<OneFossil>(this.bsURL + "fossil/"+id);
  }

  putItem(id: string, data: Fossil): Observable<Info>{
    return this._http.put<Info>(this.bsURL + "fossil/" + id, data);
  }

  patchItem(id: string, data: any): Observable<Info>{
    return this._http.patch<Info>(this.bsURL + "fossil/" + id, data);
  }



}
