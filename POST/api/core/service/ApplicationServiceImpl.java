
package com.smsco.core.service;

import com.smsco.core.model.JobApplication;
import com.smsco.core.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    private final JobApplicationRepository applicationRepository;

    @Autowired
    public ApplicationServiceImpl(JobApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    @Override
    public JobApplication submitApplication(JobApplication application) {
        return applicationRepository.save(application);
    }

    @Override
    public List<JobApplication> getApplicationsByUserId(Long userId) {
        return applicationRepository.findAll().stream()
                .filter(app -> app.getUser() != null && app.getUser().getId().equals(userId))
                .toList();
    }

    @Override
    public List<JobApplication> getApplicationsByJobId(Long jobId) {
        return applicationRepository.findAll().stream()
                .filter(app -> app.getJob() != null && app.getJob().getId().equals(jobId))
                .toList();
    }

    @Override
    public Optional<JobApplication> getApplicationById(Long id) {
        return applicationRepository.findById(id);
    }
}
