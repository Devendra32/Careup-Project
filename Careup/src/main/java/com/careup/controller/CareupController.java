package com.careup.controller;

import com.careup.helper.ApiResponse;
import com.careup.model.Role;
import com.careup.model.User;
import com.careup.service.CareupService;
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

    //find all users
    @GetMapping("/users")
    public List<User> findAllUser(){
        return this.careupService.findAllUser();
//        return  new ResponseEntity<>(user, HttpStatus.OK);
    }

    //Add new user
    @PostMapping("/add-user")
    public ResponseEntity<ApiResponse> addUser(@RequestBody User user){
        ApiResponse result = this.careupService.addUser(user);
        return  new ResponseEntity<>(result, HttpStatus.OK);
    }

    //find user by first name / last name / userId/ email
    @GetMapping("/get-user")
    public List<User> getUser(@RequestBody User user){
        return this.careupService.getUser(user);
    }
//    @GetMapping("/get-user-role")
//    public List<User> getUserByRole(@RequestBody Role role){
//        return careupService.getUserByRole(role);
//    }

    //Add new role
    @PostMapping("/add-role")
    public ResponseEntity<ApiResponse> addRole(@RequestBody Role role){
        ApiResponse role1 = this.careupService.addRole(role);
        return new ResponseEntity<>(role1,HttpStatus.OK);
    }

    //Final all the roles
    @GetMapping("/get-role")
    public List<Role> findAllRoles(){
        return this.careupService.findAllRoles();
    }
}
