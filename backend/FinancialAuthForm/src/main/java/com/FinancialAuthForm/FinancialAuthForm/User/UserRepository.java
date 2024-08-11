package com.FinancialAuthForm.FinancialAuthForm.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDetailsRepository extends JpaRepository<User, Long> {

    List<User> findByUsername(String username);
    List<User> findByPassword(String password);
    List<User> findByEmail(String email);

}
