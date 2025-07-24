package com.smsco.controller;

import com.smsco.model.JobApplication;
import com.smsco.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @PostMapping
    public JobApplication apply(@RequestBody JobApplication application) {
        return applicationService.apply(application);
    }

    @GetMapping("/user/{userId}")
    public List<JobApplication> getUserApplications(@PathVariable Long userId) {
        return applicationService.findByUserId(userId);
    }
}