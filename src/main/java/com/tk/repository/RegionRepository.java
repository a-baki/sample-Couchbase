package com.tk.repository;

import com.tk.domain.Region;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the Region entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RegionRepository extends N1qlCouchbaseRepository<Region, String> {

}
