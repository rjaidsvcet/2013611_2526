package com.empapp.monoemp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empapp.monoemp.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
