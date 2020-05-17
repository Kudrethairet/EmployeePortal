import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  pageOfItems: Array<any>;
  page:number = 1;
   employees: IEmployee[]=[];
   totoalRecords : number;
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployeesList();
  }

onChangePage(pageOfItem: Array<any>){
  this.pageOfItems = pageOfItem;
}


  getEmployeesList(){
    this.employeeService.getEmployees().subscribe({
    next: employees => {
      this.employees=employees;
      console.log(this.employees);
      this.totoalRecords=employees.length;
      console.log(this.totoalRecords)

    },
  }
    )
  }


}


