
package com.smsco.core.model;

import jakarta.persistence.*;

@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String industry;
    private String description;
    private String logoUrl;
    private String website;
    private String location;

    // Getters and Setters
}
