package com.tk.repository;

import com.tk.domain.Country;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Couchbase repository for the Country entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CountryRepository extends N1qlCouchbaseRepository<Country, String> {

}
