package com.tk.repository;

import com.tk.domain.Job;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the Job entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobRepository extends N1qlCouchbaseRepository<Job, String> {

}
