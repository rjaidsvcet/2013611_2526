package com.jobfinder.jobapplication.job.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobfinder.jobapplication.job.Job;

@Repository
public interface JobRepo extends JpaRepository<Job, Long> {

}
