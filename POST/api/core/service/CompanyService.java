
package com.smsco.core.service;

import com.smsco.core.model.Company;

import java.util.List;
import java.util.Optional;

public interface CompanyService {
    Company createCompany(Company company);
    List<Company> getAllCompanies();
    Optional<Company> getCompanyById(Long id);
}
