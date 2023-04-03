package com.careup.controller;

import com.careup.exception.InvalidUserDataException;
import com.careup.exception.UserNotFoundException;
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

    private List<User> usersList;
    private ApiResponse apiResponse;

    //Get all users
    @GetMapping("/users")
    public ResponseEntity<List<User>> findAllUser() {
        try {
            this.usersList = this.careupService.findAllUser();
            return new ResponseEntity<>(usersList, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

    //Get users by status
    @GetMapping("/active-users")
    public ResponseEntity<List<User>> getUsersByStatus() {
        try {
            usersList = this.careupService.findAllUserByStatus();
            return new ResponseEntity<>(usersList, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

    //Get by UserId
    @GetMapping("/user/{id}")
    public ResponseEntity<User> findUserById(@PathVariable int id) {
        try {
            User userById = this.careupService.findUserById(id);
            return new ResponseEntity<>(userById, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }


    //Get user by first name / last name / userId/ email
    @GetMapping("/get-user")
    public ResponseEntity<List<User>> getUser(@RequestBody User user) {
        try {
            this.usersList = this.careupService.getUser(user);
            return new ResponseEntity<>(usersList, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

    //Add new user
    @PostMapping("/add-user")
    public ResponseEntity<ApiResponse> addUser(@RequestBody User user) {
        try {
            apiResponse = this.careupService.addUser(user);
            if (apiResponse.getObj() != null) {
                return new ResponseEntity<>(apiResponse, HttpStatus.OK);
            } else {
                return new ResponseEntity(apiResponse.getMsg(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (InvalidUserDataException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

    //update user by id
    @PutMapping("/update-user/{id}")
    public ResponseEntity<ApiResponse> updateUserDetails(@RequestBody User userDetails, @PathVariable int id) {
        try {
            this.apiResponse = this.careupService.updateUserDetails(userDetails, id);
            if (apiResponse.getObj() != null) {
                return new ResponseEntity<>(apiResponse, HttpStatus.OK);
            } else {
                return new ResponseEntity(apiResponse.getMsg(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    //update status
    @PutMapping("/status/{userStatus}/{id}")
    public ResponseEntity<ApiResponse> inActiveUserDetail(@PathVariable boolean userStatus, @PathVariable int id) {
        try {
            this.apiResponse = this.careupService.updateUserStatus(userStatus, id);
            if (apiResponse.getObj() != null) {
                return new ResponseEntity<>(apiResponse, HttpStatus.OK);
            } else {
                return new ResponseEntity(apiResponse.getMsg(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }

    //Add new role
    @PostMapping("/add-role")
    public ResponseEntity<ApiResponse> addRole(@RequestBody Role role) {
        apiResponse = this.careupService.addRole(role);
        if (apiResponse.getObj() != null) {
            return new ResponseEntity(apiResponse.getMsg(), HttpStatus.OK);
        } else {
            return new ResponseEntity(apiResponse.getMsg(), HttpStatus.OK);
        }
    }

    //Find all the roles
    @GetMapping("/get-role")
    public ResponseEntity<List<Role>> findAllRoles() {
        try {
            List<Role> allRoles = this.careupService.findAllRoles();
            return new ResponseEntity<>(allRoles, HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.OK);
        }
    }
}
