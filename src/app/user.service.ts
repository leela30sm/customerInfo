import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable,BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private customerEndPoint = 'users/';
  private page: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { 
  }

  getCustomers(id:string): Observable<any[]> {
      return this.http.get<any[]>(environment.userUrl+this.customerEndPoint+id);
  }

  setData(page: string) {
    this.page.next(page);
  }
  getData(): Observable<string> {
    return this.page;
  }

}
