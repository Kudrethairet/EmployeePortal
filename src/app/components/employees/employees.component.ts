import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from './employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  pageOfItems: Array<any>;
  page:number = 1;
   public employees; 
   totoalRecords : number;
  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeesList();
    //this.getEmployee(100);
  }

onChangePage(pageOfItem: Array<any>){
  this.pageOfItems = pageOfItem;
}


  getEmployeesList(){
    this.employeeService.getEmployees().subscribe(
      data => {this.employees = data}
    )
  }

addNewUserOnclick(){
  this.router.navigate(['/createNewEmployee']);

  
}


}


