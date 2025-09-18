package com.jobfinder.jobapplication.job.service.implementation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobfinder.jobapplication.job.Job;
import com.jobfinder.jobapplication.job.repository.JobRepo;
import com.jobfinder.jobapplication.job.service.JobService;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepo repo;
    // public JobServiceImpl(JobRepo repo) {
    //     this.repo = repo;
    // }

    private Long newId = 1L;

    @Override
    public List<Job> findAll() {
        return repo.findAll();
    }

    @Override
    public void createJob(Job job) {
        job.setId(newId++);
        repo.save(job);
    }

    @Override
    public Job getJobById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public boolean deleteById(Long id) {
        try {
            repo.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean updateJob(Long id, Job updatedJob) {
        Optional<Job> optional = repo.findById(id);
        if (optional.isPresent()) {
            Job job = optional.get();
            job.setTitle(updatedJob.getTitle());
            job.setDescription(updatedJob.getDescription());
            job.setMinSalary(updatedJob.getMinSalary());
            job.setMaxSalary(updatedJob.getMaxSalary());
            job.setLocation(updatedJob.getLocation());
            repo.save(job);
            return true;
        }
        return false;
    }
    
}
