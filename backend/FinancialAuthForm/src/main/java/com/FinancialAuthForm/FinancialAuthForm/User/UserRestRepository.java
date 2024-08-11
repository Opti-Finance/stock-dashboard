package com.FinancialAuthForm.FinancialAuthForm.User;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRestRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);

}