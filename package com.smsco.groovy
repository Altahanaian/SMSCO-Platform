package com.smsco.controller;

import com.smsco.core.service.EmailService;
import com.smsco.core.model.Job;
import com.smsco.core.model.JobApplication;
import com.smsco.core.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Locale;

@RestController
public class TestEmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/test-email")
    public String sendTestEmail() {
        // إعداد بيانات وهمية فقط للاختبار
        User user = new User();
        user.setEmail("yourname@example.com"); // غيّرها لبريدك
        user.setFullName("أحمد السلمي");

        Job job = new Job();
        job.setTitle("مهندس نظم");

        JobApplication application = new JobApplication();
        application.setJob(job);
        application.setUser(user);
        application.setStatus("PENDING");

        Locale locale = LocaleContextHolder.getLocale();

        // إرسال بريد اختبار
        emailService.sendApplicationConfirmation(user, application, locale);
        return "📨 تم إرسال البريد التجريبي بنجاح إلى: " + user.getEmail();
    }
}
