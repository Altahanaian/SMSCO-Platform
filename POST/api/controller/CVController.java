package com.smsco.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/cv")
public class CVController {

    @PostMapping("/generate")
    public ResponseEntity<String> generateCV(@RequestParam Map<String, String> params) {
        // This is a placeholder. You can generate a PDF or store the CV data here.
        String fullName = params.getOrDefault("fullName", "N/A");
        return ResponseEntity.ok("CV for " + fullName + " received and is being processed.");
    }
}