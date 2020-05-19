import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';


const routes: Routes = [
 
 
  {
    path:'employees/view/:id',
    component: ViewEmployeeComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
