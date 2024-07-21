package com.trading_app.backend;

import com.trading_app.backend.RegistrationRequest;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    public String register(RegistrationRequest request) {
        System.out.println("Username: " + request.getUsername());
        System.out.println("Password: " + request.getPassword());
        return "User registered successfully!";
    }
}
