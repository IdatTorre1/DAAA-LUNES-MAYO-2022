package idat.edu.pe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import idat.edu.pe.model.Employee;

public interface EmployeeRepository   extends  JpaRepository<Employee, Long>  {

}
