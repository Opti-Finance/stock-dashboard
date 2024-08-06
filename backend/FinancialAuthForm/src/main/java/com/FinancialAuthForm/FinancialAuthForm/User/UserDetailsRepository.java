package com.FinancialAuthForm.FinancialAuthForm.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {

    List<UserDetails> findByUsername(String username);
    List<UserDetails> findByPassword(String password);
}
