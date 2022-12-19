package com.careup.service;

import com.careup.helper.ApiResponse;
import com.careup.model.Role;
import com.careup.model.User;
import java.util.List;

public interface CareupService {
    public List<User> findAllUser();
    public ApiResponse addUser(User user);
    public List<User> getUser(User user);
    public String saveImg(String base64Img);
    public ApiResponse addRole(Role role);
//    public List<Role> getRole();
//    public List<User> getUserByRole(Role role);

}
