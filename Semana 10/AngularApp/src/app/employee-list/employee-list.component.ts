import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.ts';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;


  constructor(private EmployeeService: EmployeeService,
              private router:Router ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.employees = this.EmployeeService.getEmployeeList();

  }


  deleteEmployee(id: number){
   this.EmployeeService.deleteEmployee(id)
   .subscribe(
    data => {
    console.log(data);
    this.reloadData();

    }, error => console.error());

  }

   employeeDetails(id:number){
    this.router.navigate(['details', id]);
   }

updateEmployee(id: number){
this.router.navigate(['update', id]);

}

}
