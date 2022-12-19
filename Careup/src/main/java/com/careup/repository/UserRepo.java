package com.careup.repository;

import com.careup.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
    public List<User> findByFirstNameOrLastNameOrUserIdOrEmailId(String firstName,
                                                                 String lastName,
                                                                 int userId,
                                                                 String emailId);
//    public List<User> findByRole(Role role);
}
