package com.jobfinder.jobapplication.job.controller;

// import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobfinder.jobapplication.job.Job;
import com.jobfinder.jobapplication.job.service.JobService;

@RestController
public class JobController {
    @Autowired
    private JobService service;

    // Constructor for Service 
    // public JobController(JobService service) {
    //     this.service = service;
    // }

    @GetMapping("/jobs")
    public List<Job> findAll () {
        return service.findAll();
    }

    @PostMapping("/jobs")
    public String addJob (@RequestBody Job job) {
        service.createJob(job);
        return "Works";
    }
}
