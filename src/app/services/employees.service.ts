import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators'
import { IEmployee } from '../components/employees/employee';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


const httpCptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

//private EmployeesURL="api/employess/dummyData.json"

  constructor(private http: HttpClient){}
  
  getEmployees(){
    return this.http.get("/server/api/getEmployees");

    
  }

  getEmployee(id: number){

   return this.http.get("/server/api/getEmployees/"+ id);
  }


  
  getEmployeeInfo(id: number){

    return this.http.get("/server/api/getEmployees/"+ id);
   }
 

  getJobs(){
    return this.http.get("/server/api/getJobs/");
  }
 

    creatNewEmployee(employee){
      let body = JSON.stringify(employee);
      return this.http.post('/server/api/getEmployees/', body, httpCptions);
    }

  updateEmployee(id:number, bike){
    let body = JSON.stringify(bike);
    return this.http.put('/server/api/getEmployees/'+id, body, httpCptions);
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



