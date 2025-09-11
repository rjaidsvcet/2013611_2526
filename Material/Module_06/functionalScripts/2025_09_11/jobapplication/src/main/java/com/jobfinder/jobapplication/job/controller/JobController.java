package com.jobfinder.jobapplication.job.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobfinder.jobapplication.job.Job;

@RestController
public class JobController {
    private List<Job> jobs = new ArrayList<>();
    private Long nextId = 1L;

    @GetMapping("/jobs")
    public List<Job> findAll () {
        return jobs;
    }

    @PostMapping("/jobs")
    public String addJob (@RequestBody Job job) {
        job.setId(nextId++);
        jobs.add(job);
        return "Works";
    }
}
