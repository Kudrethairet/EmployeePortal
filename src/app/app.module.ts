import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NevigatorComponent } from './components/nevigator/nevigator.component';
import { EmployeesService } from './services/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { ManagersComponent } from './components/managers/managers.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NevigatorComponent,
    ManagersComponent,
    DepartmentsComponent,
    ViewEmployeeComponent,
    AddEmployeesComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers:[EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
