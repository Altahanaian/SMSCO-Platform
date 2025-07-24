
package com.smsco.core.service;

import com.smsco.core.model.JobPosting;

import java.util.List;
import java.util.Optional;

public interface JobService {
    JobPosting createJob(JobPosting jobPosting);
    List<JobPosting> getAllJobs();
    Optional<JobPosting> getJobById(Long id);
    List<JobPosting> getJobsByCompanyId(Long companyId);
}
