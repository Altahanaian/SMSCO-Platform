package com.smsco.auth;

import com.smsco.model.UserProfile;
import com.smsco.repository.UserProfileRepository;
import com.smsco.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserProfileRepository userRepo;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/register")
    public UserProfile register(@RequestBody UserProfile user) {
        return userRepo.save(user);
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        UserProfile user = userRepo.findByEmail(email);
        Map<String, String> response = new HashMap<>();

        if (user != null && user.getPassword().equals(password)) {
            String token = jwtUtils.generateJwtToken(email);
            response.put("token", token);
        } else {
            response.put("error", "Invalid credentials");
        }

        return response;
    }
}