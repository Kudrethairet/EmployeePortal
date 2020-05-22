import { Component, OnInit, ɵEMPTY_MAP } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';
import { map, isEmpty } from 'rxjs/operators';
import { IEmployee } from '../employees/employee';
import { error } from 'protractor';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  public employee ; 
employees: IEmployee[];
  bikeform: FormGroup;
  validMessage: String="";

  constructor(private employeeService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeInfo(this.route.snapshot.params.id)
    this.employeeForm = new FormGroup({

      employee_id: new FormControl,
      first_name: new FormControl(),
      last_name: new FormControl,
      email: new FormControl,
      phone_number: new FormControl,
      salary: new FormControl,
      job_id: new FormControl,
      commission_pct: new FormControl,
      manager_id: new FormControl,
      department_id: new FormControl



  
});  
}
  getEmployee(id: number){
    this.employeeService.getEmployee(id).subscribe(
      data=>{

        this.employee=data;
        console.log(this.employee.email)
  },
        err => console.error(err),
        () => console.log('Employee loaded')
    );
    
  }

  getEmployeeInfo(id: number){
    return this.employeeService.getEmployee(id).subscribe(
      (employee: IEmployee) => this.editForm(employee),
    )
    
  }
  public info;

/*  getEmployeeInfo(id: number){

   return new Promise(
    resolve=>{
      this.employeeService.getEmployee(id).subscribe(
        (data:any) =>{
         // console.log(data);
       //   resolve(data);
        }
      )
    }

   )
  }


*/
  enterValue: string;
 enteredValue(enterValue){
  console.log(enterValue);
  }

  public toggleUserNameButton: boolean =true ;
  public confirmButtonStarus=false;
  edit: String="EDIT"
  enable(){
    this.toggleUserNameButton = false;
    this.confirmButtonStarus=true;
  }
  
  disable(){
    this.toggleUserNameButton = true;
    this.confirmButtonStarus=false;
  
  }
   switchButton(toggle: boolean){
    
    if(toggle==true){
      this.employeeForm.enable();
      this.enable()
      this.edit="SAVE";
    }
    else if(toggle==false){
      this.employeeForm.disable();
     this.disable();
  
      this.edit="EDIT"
    }
  
   }
  
   switchConfirmButton(toggle: boolean){
    if(toggle==true){
      this.disable()
     
    }
    else if(toggle==false){
     this.enable()
  
      
    }
  
   }
   buttonText(){

    return this.edit;
   }
   employeeForm: FormGroup;


   editForm(employee: IEmployee){
    this.employeeForm.patchValue({
      
      employee_id: employee.employee_id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      email: employee.email,
      phone_number: employee.phone_number,
      salary: employee.salary,
      job_id: employee.job_id,
      commission_pct: employee.commission_pct,
      manager_id: employee.manager_id,
      department_id: employee.department_id


    })


   }

   submitupdateEmployeeAction(){
    this.employeeService.updateEmployee(this.route.snapshot.params.id, this.employeeForm.value).subscribe(
        data=>{
          this.router.navigate(['/employees']);
          return true;       
         },
         error =>{
           return Observable.throw(error);
         }

    )
   }


  public Job_titles;












}




