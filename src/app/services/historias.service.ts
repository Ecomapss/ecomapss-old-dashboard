import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Info, Config } from '../settings/Config';
import { Historia, ResourceHistory } from '../historia/classes/Historia';

@Injectable()
export class HistoriasService {
  bsURL: String;
  moduleName: string = "historias";
  constructor(private _http: HttpClient, private _config: Config) {
    this.bsURL = this._config.getBsUrl();
  }


  getData():Observable<ResourceHistory> {
    return this._http.get<ResourceHistory>(this.bsURL.concat(this.moduleName));
  }

  putData(id: string, data: Historia): Observable<Info> {
    return this._http.put<Info>(this.bsURL.concat(this.moduleName) + "/" + id, data);
  }

  postData(data: Historia): Observable<Info> {
    return this._http.post<Info>(this.bsURL.concat(this.moduleName), data);
  }

  deleteData(id: string): Observable<Info> {
    return this._http.delete<Info>(this.bsURL.concat(this.moduleName) + "/" + id);
  }


  getByIdData(id: string): Observable<any> {
    return this._http.get<any>(this.bsURL.concat(this.moduleName) + "/" + id);
  }

}
