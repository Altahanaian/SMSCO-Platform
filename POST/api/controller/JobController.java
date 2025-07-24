package com.smsco.controller;

import com.smsco.model.Job;
import com.smsco.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping
    public Job postJob(@RequestBody Job job) {
        return jobService.save(job);
    }

    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.findAll();
    }

    @GetMapping("/{id}")
    public Job getJob(@PathVariable Long id) {
        return jobService.findById(id);
    }
}