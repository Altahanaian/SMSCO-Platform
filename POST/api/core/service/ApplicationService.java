
package com.smsco.core.service;

import com.smsco.core.model.JobApplication;

import java.util.List;
import java.util.Optional;

public interface ApplicationService {
    JobApplication submitApplication(JobApplication application);
    List<JobApplication> getApplicationsByUserId(Long userId);
    List<JobApplication> getApplicationsByJobId(Long jobId);
    Optional<JobApplication> getApplicationById(Long id);
}
