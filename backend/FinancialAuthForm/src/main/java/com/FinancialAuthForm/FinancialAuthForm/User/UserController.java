package com.FinancialAuthForm.FinancialAuthForm.User;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sendData")
public class UserController {

    private final UserDetailsRepository repository;

    public UserController(UserDetailsRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/user")
    public void sendUserDetails(@RequestBody UserDetails user) {
        repository.save(user);
    }

}
