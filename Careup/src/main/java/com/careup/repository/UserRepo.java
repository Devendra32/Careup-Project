package com.careup.repository;

import com.careup.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    public List<User> findByFirstNameOrLastNameOrUserIdOrEmailId(String firstName,
                                                                 String lastName,
                                                                 int userId,
                                                                 String emailId);

    @Query("SELECT u FROM User u WHERE u.status = 1")
    public List<User> findAllByStatus();
    //    public List<User> findByRole(Role role);


//    @Modifying
    @Query(value = "update user set status=0 where user_id=:id", nativeQuery = true)
    public void inActiveUser(int id);
}
