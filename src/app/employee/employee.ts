
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employeeServ';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.html',
  
})
export class EmployeeComponent  {
  employees: Employee [] = [];

  constructor(private  empservice : EmployeeService) {}

  ngOnInit(): void {
    this.empservice.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
