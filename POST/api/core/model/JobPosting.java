
package com.smsco.core.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "job_postings")
public class JobPosting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    @Column(length = 5000)
    private String description;
    private String location;
    private String jobType; // Full-time, Part-time, Remote
    private Double salary;
    private LocalDate postedDate;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    // Getters and Setters
}
