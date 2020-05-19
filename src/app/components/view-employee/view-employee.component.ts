import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  public employee; 
  bikeform: FormGroup;
  validMessage: String="";
  constructor(private employeeService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployee(this.route.snapshot.params.id)
  }
  getEmployee(id: number){
    this.employeeService.getEmployee(id).subscribe(
      data=>{
        
       
        
        this.employee=data;
        console.log(data)
  },
        err => console.error(err),
        () => console.log('Employee loaded')
    );
    
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
      this.enable()
      this.edit="SAVE";
    }
    else if(toggle==false){
     this.disable()
  
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


}




