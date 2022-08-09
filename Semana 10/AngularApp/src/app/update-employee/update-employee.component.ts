import { EmployeeService } from './../employee.service';
import { Employee } from './../employee.ts';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee;
  constructor(private route: ActivatedRoute,
              private router:Router,
              private employeeServices:  EmployeeService) { }

  ngOnInit() {
     this.id = this.route.snapshot.params['id'];

     this.employeeServices.getEmployee(this.id).subscribe(data => {console.log(data)
     this.employee= data;
    }, error => console.log(error));
  }

updateEmployee(){
this.employeeServices.updateEmployee(this.id, this.employee)
.subscribe(data => console.log(data), error => console.log(error));
this.employee = new  Employee();
this.gotoList();

}

OnSubmit(){
 this.updateEmployee();
}

gotoList(){
this.router.navigate(['/employees']);
}


}
