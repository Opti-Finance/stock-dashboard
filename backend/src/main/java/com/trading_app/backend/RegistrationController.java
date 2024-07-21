package com.trading_app.backend;

import com.trading_app.backend.RegistrationRequest;
import com.trading_app.backend.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/registration")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public ResponseEntity<String> register(@RequestBody RegistrationRequest request) {
        String result = registrationService.register(request);
        return ResponseEntity.ok(result);
    }
}
