package com.jobfinder.jobapplication.job.service;

import java.util.List;

import com.jobfinder.jobapplication.job.Job;

public interface JobService {
    List<Job> findAll();
    void createJob(Job job);
    Job getJobById(Long id);
}
