package com.trading_app.backend;

import com.trading_app.backend.RegistrationRequest;
import com.trading_app.backend.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173/", allowCredentials="true")
@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping("/api/v1/registration")
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request) {
        String result = registrationService.register(request);
        return ResponseEntity.ok(result);
    }
}
