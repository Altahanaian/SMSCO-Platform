
package com.smsco.core.service;

import com.smsco.core.model.Company;
import com.smsco.core.model.JobPosting;
import com.smsco.core.repository.JobPostingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobServiceImpl implements JobService {

    private final JobPostingRepository jobPostingRepository;

    @Autowired
    public JobServiceImpl(JobPostingRepository jobPostingRepository) {
        this.jobPostingRepository = jobPostingRepository;
    }

    @Override
    public JobPosting createJob(JobPosting jobPosting) {
        return jobPostingRepository.save(jobPosting);
    }

    @Override
    public List<JobPosting> getAllJobs() {
        return jobPostingRepository.findAll();
    }

    @Override
    public Optional<JobPosting> getJobById(Long id) {
        return jobPostingRepository.findById(id);
    }

    @Override
    public List<JobPosting> getJobsByCompanyId(Long companyId) {
        return jobPostingRepository.findAll().stream()
                .filter(j -> j.getCompany() != null && j.getCompany().getId().equals(companyId))
                .collect(Collectors.toList());
    }
}
