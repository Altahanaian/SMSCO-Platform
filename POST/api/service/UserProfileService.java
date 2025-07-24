package com.smsco.service;

import com.smsco.model.UserProfile;
import com.smsco.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public List<UserProfile> getAllUsers() {
        return userProfileRepository.findAll();
    }

    public UserProfile getUserById(Long id) {
        return userProfileRepository.findById(id).orElse(null);
    }

    public UserProfile createUser(UserProfile user) {
        return userProfileRepository.save(user);
    }

    public void deleteUser(Long id) {
        userProfileRepository.deleteById(id);
    }

    public UserProfile findByEmail(String email) {
        return userProfileRepository.findByEmail(email);
    }
}