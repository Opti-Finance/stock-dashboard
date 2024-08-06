package com.FinancialAuthForm.FinancialAuthForm.User;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserDetailsRestRepository extends PagingAndSortingRepository<UserDetails, Long> {
    List<UserDetails> findByUsername(String username);
    List<UserDetails> findByPassword(String password);
}
