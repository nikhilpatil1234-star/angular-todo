import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { dataModel } from './list/model';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // addTextEvent = new EventEmitter<Boolean>();
  addTextEvent = new Subject<Boolean>();
  changeTextEvent = new Subject<string>();

  constructor(private http: HttpClient) {}
  AddEmployee(data: dataModel) {
    return this.http.post<dataModel>('http://localhost:3000/posts', data);
  }
  getAllEmployee(): Observable<dataModel> {
    return this.http.get<dataModel>('http://localhost:3000/posts');
  }
  deleteEmployee(id: number) {
    return this.http.delete<dataModel>(`http://localhost:3000/posts/${id}`);
  }
  FetchEmployeeId(id: number) {
    return this.http.get<dataModel>(`http://localhost:3000/posts/${id}`);
  }
  updateEmploye(id: number, data: dataModel) {
    return this.http.put<dataModel>(`http://localhost:3000/posts/${id}`, data);
  }
  addTextMethod() {
    // this.addTextEvent.emit(true);
    this.addTextEvent.next(true);
  }
  changeTextMethod() {
    this.changeTextEvent.next('this is change by nikhil');
  }
  getCoutries(searchTerm: any) {
  return  this.http.get(`https://restcountries.com/v3.1/name/${searchTerm}
    `);
  }
}
