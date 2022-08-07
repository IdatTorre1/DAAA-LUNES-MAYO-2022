
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from './../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService ){ }

  ngOnInit() {
this.employee = new Employee();
this.id = this.route.snapshot.params['id'];

this.employeeService.getEmployee(this.id).subscribe(data =>{
     console.log(data)
     this.employee = data;

}, error => console.log(error));

  }

  list(){
    this.router.navigate(['employees']);
  }
}
