package com.jobfinder.jobapplication.job.controller;

// import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    public ResponseEntity<List<Job>> findAll () {
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping("/jobs")
    public ResponseEntity<String> addJob (@RequestBody Job job) {
        service.createJob(job);
        return new ResponseEntity<>("Works", HttpStatus.CREATED);
    }

    @GetMapping("/jobs/{id}")
    public ResponseEntity<Job> getSingleJob(@PathVariable Long id) {
        Job job = service.getJobById(id);
        if (job != null)
            return new ResponseEntity<>(job, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/jobs/{id}")
    public ResponseEntity<String> deleteJob(@PathVariable Long id) {
        boolean deleted = service.deleteById(id);
        if (deleted)
            return new ResponseEntity<>("Job Deleted", HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/jobs/{id}")
    public ResponseEntity<String> updateJob (@PathVariable Long id, @RequestBody Job job) {
        boolean updated = service.updateJob(id, job);
        if (updated)
            return new ResponseEntity<>("Job Updated", HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
