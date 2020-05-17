import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators'
import { IEmployee } from '../components/employees/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

private EmployeesURL="api/employess/dummyData.json"

  constructor(private http: HttpClient){}
  
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.EmployeesURL)

    
  }
 
  private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logging infrastructure
    //instead of just logging it to the console
    let errorMessage =' '
    if(err.error instanceof ErrorEvent){
        //A client-side or network error occurred. Handle it accordingly
        errorMessage=`An error occurred: $(err.error.message)`;
    }
    else{
        errorMessage =  `Server return code: ${err.status}, error
message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);



}

}



