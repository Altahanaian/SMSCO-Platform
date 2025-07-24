
package com.smsco.controller;

import com.smsco.core.model.JobApplication;
import com.smsco.core.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/company/applications")
public class ApplicationStatusController {

    private final ApplicationService applicationService;

    @Autowired
    public ApplicationStatusController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PostMapping("/{id}/status")
    public String updateStatus(@PathVariable("id") Long id,
                               @RequestParam("status") String status) {
        JobApplication application = applicationService.getApplicationById(id).orElse(null);
        if (application != null) {
            application.setStatus(status);
            
        applicationService.submitApplication(application);
        emailService.sendStatusUpdate(application.getUser(), application, LocaleContextHolder.getLocale());
        
        }
        return "redirect:/company/jobs/" + (application != null ? application.getJob().getId() : "") + "/applicants";
    }
}
