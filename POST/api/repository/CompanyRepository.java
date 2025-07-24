package com.smsco.repository;

import com.smsco.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Company findByEmail(String email);
}