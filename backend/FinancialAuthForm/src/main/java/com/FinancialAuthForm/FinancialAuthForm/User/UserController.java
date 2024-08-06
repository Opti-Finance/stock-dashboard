package com.FinancialAuthForm.FinancialAuthForm.User;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserDetailsRepository repository;

    public UserController(UserDetailsRepository repository) {
        this.repository = repository;
    }
    @RequestMapping( "/sendData/{username}/{password}")
    public void sendUserDetails(@PathVariable String username, @PathVariable String password){
        repository.save(new UserDetails(username, password));
    }
}
