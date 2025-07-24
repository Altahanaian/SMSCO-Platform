package com.smsco.service.impl;

import com.smsco.model.JobApplication;
import com.smsco.repository.JobApplicationRepository;
import com.smsco.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private JobApplicationRepository applicationRepository;

    @Override
    public JobApplication apply(JobApplication application) {
        return applicationRepository.save(application);
    }

    @Override
    public List<JobApplication> findByUserId(Long userId) {
        return applicationRepository.findByUserId(userId);
    }
}