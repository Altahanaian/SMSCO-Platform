
package com.smsco.core.service;

import com.smsco.core.model.JobApplication;
import com.smsco.core.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.Locale;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    private final Environment env;

    @Autowired
    public EmailService(JavaMailSender mailSender, Environment env) {
        this.mailSender = mailSender;
        this.env = env;
    }

    public void sendApplicationConfirmation(User user, JobApplication application, Locale locale) {
        String subject = locale.getLanguage().equals("ar") ?
                "تم استلام طلب التوظيف الخاص بك" : "Your Job Application Has Been Received";
        String body = locale.getLanguage().equals("ar") ?
                String.format("عزيزي %s،\n\nتم استلام طلبك بنجاح لوظيفة: %s.\nسنتواصل معك قريبًا.\n\nفريق سمسكو.", user.getFullName(), application.getJob().getTitle()) :
                String.format("Dear %s,\n\nYour application for the job "%s" has been received successfully.\nWe will contact you soon.\n\nBest regards,\nSMSCO Team", user.getFullName(), application.getJob().getTitle());

        sendEmail(user.getEmail(), subject, body);
    }

    public void sendStatusUpdate(User user, JobApplication application, Locale locale) {
        String subject = locale.getLanguage().equals("ar") ?
                "تحديث حالة طلب التوظيف" : "Job Application Status Update";
        String status = switch (application.getStatus()) {
            case "APPROVED" -> locale.getLanguage().equals("ar") ? "مقبول" : "Approved";
            case "REJECTED" -> locale.getLanguage().equals("ar") ? "مرفوض" : "Rejected";
            case "INTERVIEW" -> locale.getLanguage().equals("ar") ? "بانتظار المقابلة" : "Interview Scheduled";
            default -> locale.getLanguage().equals("ar") ? "قيد المراجعة" : "Pending Review";
        };
        String body = locale.getLanguage().equals("ar") ?
                String.format("عزيزي %s،\n\nتم تحديث حالة طلبك لوظيفة: %s إلى "%s".\n\nفريق سمسكو.", user.getFullName(), application.getJob().getTitle(), status) :
                String.format("Dear %s,\n\nYour application for the job "%s" has been updated to "%s".\n\nBest regards,\nSMSCO Team", user.getFullName(), application.getJob().getTitle(), status);

        sendEmail(user.getEmail(), subject, body);
    }

    private void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(env.getProperty("spring.mail.username"));
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);
    }
}
