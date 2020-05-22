import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  employeeForm: FormGroup;
  validMessage: String="";
  constructor(private employeeService: EmployeesService, private router: Router) { }

  public Job_titles;


  ngOnInit() {
    this.employeeForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      job_id: new FormControl('', Validators.required)




    });
this.getJobs();

  }

    submitNewEmployeeAction() {
      if(this.employeeForm.valid){
        this.validMessage = "new Employee Registration has been sumbitted.!";
        this.employeeService.creatNewEmployee(this.employeeForm.value).subscribe(
          data => {
            this.employeeForm.reset();
            this.router.navigate(['/employees']);
            return true;
          },
          error => {
            return Observable.throw(error);
          }
        )
      }
      else {

        this.validMessage = "please fill out the beform before submitting!"
      }
    }

getJobs(){
  this.employeeService.getJobs().subscribe(
    data => {this.Job_titles =data
      console.log(this.Job_titles)
    }
  )
}



}
