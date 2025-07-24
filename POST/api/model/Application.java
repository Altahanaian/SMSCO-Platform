package com.smsco.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String status = "PENDING"; // default: PENDING

    private LocalDateTime appliedAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserProfile user;

    @ManyToOne
    @JoinColumn(name = "job_id")
    private Job job;

    public Application() {}

    public Application(UserProfile user, Job job) {
        this.user = user;
        this.job = job;
    }

    // Getters and Setters
    public Long getId() { return id; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public LocalDateTime getAppliedAt() { return appliedAt; }
    public void setAppliedAt(LocalDateTime appliedAt) { this.appliedAt = appliedAt; }

    public UserProfile getUser() { return user; }
    public void setUser(UserProfile user) { this.user = user; }

    public Job getJob() { return job; }
    public void setJob(Job job) { this.job = job; }
}