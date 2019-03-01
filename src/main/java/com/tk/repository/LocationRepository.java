package com.tk.repository;

import com.tk.domain.Location;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the Location entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LocationRepository extends N1qlCouchbaseRepository<Location, String> {

}
