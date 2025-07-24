
package com.smsco.core.service;

import com.smsco.core.model.User;

public interface UserService {
    User registerUser(User user);
    User findByEmail(String email);
}
