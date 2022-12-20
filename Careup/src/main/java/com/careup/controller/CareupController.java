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

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class CareupController {
    @Autowired
    private CareupService careupService;

    @GetMapping("/users")
    public List<User> findAllUser(){
        return this.careupService.findAllUser();
//        return  new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/add-user")
    public ResponseEntity<ApiResponse> addUser(@RequestBody User user){
        ApiResponse result = this.careupService.addUser(user);
        return  new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/get-user")
    public List<User> getUser(@RequestBody User user){
        return this.careupService.getUser(user);
    }
//    @GetMapping("/get-user-role")
//    public List<User> getUserByRole(@RequestBody Role role){
//        return careupService.getUserByRole(role);
//    }

    @PostMapping("/add-role")
    public ResponseEntity<ApiResponse> addRole(@RequestBody Role role){
        ApiResponse role1 = this.careupService.addRole(role);
        return new ResponseEntity<>(role1,HttpStatus.OK);
    }
//    @GetMapping("/get-role")
//    public List<Role> getRole(){
//        return this.careupService.getRole();
//    }
}
