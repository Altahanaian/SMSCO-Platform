
package com.smsco.controller;

import com.smsco.core.model.JobPosting;
import com.smsco.core.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class PublicJobController {

    private final JobService jobService;

    @Autowired
    public PublicJobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/jobs")
    public String listJobs(Model model) {
        List<JobPosting> jobs = jobService.getAllJobs();
        model.addAttribute("jobs", jobs);
        return "explore-jobs";
    }
}
