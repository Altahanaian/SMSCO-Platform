
package com.smsco.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "jobs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    private String location;

    @Enumerated(EnumType.STRING)
    private JobType jobType;

    private LocalDate applicationDeadline;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @OneToMany(mappedBy = "job", cascade = CascadeType.ALL)
    private List<JobApplication> applications;

    @CreationTimestamp
    private LocalDateTime createdAt;

    public enum JobType {
        FULL_TIME, PART_TIME, REMOTE, INTERNSHIP
    }
}
