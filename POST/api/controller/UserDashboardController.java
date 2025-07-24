
package com.smsco.controller;

import com.smsco.core.model.JobApplication;
import com.smsco.core.model.User;
import com.smsco.core.service.ApplicationService;
import com.smsco.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/dashboard")
public class UserDashboardController {

    private final ApplicationService applicationService;
    private final UserService userService;

    @Autowired
    public UserDashboardController(ApplicationService applicationService, UserService userService) {
        this.applicationService = applicationService;
        this.userService = userService;
    }

    @GetMapping
    public String showDashboard(Model model, Authentication authentication) {
        User user = userService.findByEmail(authentication.getName());
        List<JobApplication> applications = applicationService.getApplicationsByUser(user);
        model.addAttribute("applications", applications);
        return "user-dashboard";
    }
}
