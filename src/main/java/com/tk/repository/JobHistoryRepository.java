package com.tk.repository;

import com.tk.domain.JobHistory;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the JobHistory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobHistoryRepository extends N1qlCouchbaseRepository<JobHistory, String> {

}
