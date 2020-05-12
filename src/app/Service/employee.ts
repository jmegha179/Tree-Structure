import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Emplyee } from '../Model/employee-model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    /**
     * Used to store base Url
     */
    baseUrl = '../../assets/employee.json';

    constructor(private http: HttpClient) {
    }

    // function to get Employee Information
    getAll(): Observable<Emplyee[]> {
        return this.http.get<Emplyee[]>(this.baseUrl).pipe(
          map(res => {
            return res;
          })
        );
      }
}
