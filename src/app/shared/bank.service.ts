
import { Injectable, Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Bank } from './bank';


@Injectable({
  providedIn: 'root',

})
export class BankService {

  
  
  url: string = 'http://localhost:3000/BankDetails';

  constructor(private http: HttpClient) { }

  getBank(): Observable<Bank[]> {

    return this.http.get<Bank[]>(this.url);

  }

}
