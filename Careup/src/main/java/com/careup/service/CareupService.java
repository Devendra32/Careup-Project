package com.careup.service;

import com.careup.helper.ApiResponse;
import com.careup.model.Role;
import com.careup.model.User;

import java.util.List;

public interface CareupService {
    public List<User> findAllUser();

    public List<User> findAllUserByStatus();

    public ApiResponse addUser(User user);

    public User findUserById(int id);

    public List<User> getUser(User user);

    public String saveImg(String base64Img);

    public ApiResponse addRole(Role role);

    //    public ApiResponse updateUser(User user);
    public ApiResponse updateUserDetails(User userDetails, int id);

    public String inActive(int id);

    public List<Role> findAllRoles();
//    public List<User> getUserByRole(Role role);

}
