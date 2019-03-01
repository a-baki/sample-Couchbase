package com.tk.repository;

import com.tk.domain.Department;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the Department entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DepartmentRepository extends N1qlCouchbaseRepository<Department, String> {

}
