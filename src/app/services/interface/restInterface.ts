import { Observable } from 'rxjs/Rx';

export interface CrudData{
  getTrees(): Observable<any[]>,
  deleteItem(id: string): Observable<any>,
  getByID(id: string): Observable<any>,
  postItem(data: any): Observable<any>
}