package com.tk.repository;

import com.tk.domain.Task;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the Task entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TaskRepository extends N1qlCouchbaseRepository<Task, String> {

}
