package com.FinancialAuthForm.FinancialAuthForm.User;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserDetailsRestRepository extends PagingAndSortingRepository<User, Long> {
    List<User> findByUsername(String username);
    List<User> findByPassword(String password);

    List<User> findByEmail(String email);

}
