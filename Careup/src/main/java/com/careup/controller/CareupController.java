package com.careup.controller;

import com.careup.helper.ApiResponse;
import com.careup.model.Role;
import com.careup.model.User;
import com.careup.service.CareupService;
import jakarta.persistence.PostUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CareupController {
    @Autowired
    private CareupService careupService;


    //Get all users
    @GetMapping("/users")
    public List<User> findAllUser() {
        return this.careupService.findAllUser();
//        return  new ResponseEntity<>(user, HttpStatus.OK);
    }

    //Get all active users
    @GetMapping("/active-users")
    public List<User> getUsersByStatus() {
        return this.careupService.findAllUserByStatus();
    }

    //Add new user
    @PostMapping("/add-user")
    public ResponseEntity<ApiResponse> addUser(@RequestBody User user) {
        ApiResponse result = this.careupService.addUser(user);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //Get user by first name / last name / userId/ email
    @GetMapping("/get-user")
    public List<User> getUser(@RequestBody User user) {
        return this.careupService.getUser(user);
    }

    //update user by id
    @PutMapping("/update-user/{id}")
    public ResponseEntity<ApiResponse> updateUserDetails(@RequestBody User userDetails, @PathVariable int id) {
        ApiResponse updatedUser = this.careupService.updateUserDetails(userDetails, id);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    //update status
    @PutMapping("/status/{userStatus}/{id}")
     public String inActiveUserDetail(@PathVariable boolean userStatus, @PathVariable int id) {
        return this.careupService.inActive(userStatus, id);
    }

    //Get by Id
    @GetMapping("/user/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id) {
        User userById = this.careupService.findUserById(id);
        return new ResponseEntity<>(userById, HttpStatus.OK);
    }


//    @GetMapping("/get-user-role")
//    public List<User> getUserByRole(@RequestBody Role role){
//        return careupService.getUserByRole(role);
//    }

    //Add new role
    @PostMapping("/add-role")
    public ResponseEntity<ApiResponse> addRole(@RequestBody Role role) {
        ApiResponse role1 = this.careupService.addRole(role);
        return new ResponseEntity<>(role1, HttpStatus.OK);
    }

    //Find all the roles
    @GetMapping("/get-role")
    public List<Role> findAllRoles() {
        return this.careupService.findAllRoles();
    }
}
