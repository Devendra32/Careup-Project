package com.careup.service;

import com.careup.exception.InvalidUserDataException;
import com.careup.exception.UserNotFoundException;
import com.careup.helper.ApiResponse;
import com.careup.model.Role;
import com.careup.model.User;
import com.careup.repository.RoleRepo;
import com.careup.repository.UserRepo;
import com.careup.validation.CareupValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.io.*;
import java.util.*;

@Service
public class CareupServiceImpl implements CareupService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private RoleRepo roleRepo;
    @Autowired
    private CareupValidation validation;
    @Autowired
    private ApiResponse apiResponse;

    //Get all users
    @Override
    public List<User> findAllUser() {
        List<User> userList = userRepo.findAll();
        if (userList.isEmpty()) {
            throw new UserNotFoundException("No User Found !!");
        }
        return userList;
    }

    //Find all users by Status
    @Override
    public List<User> findAllUserByStatus() {
        List<User> userList = userRepo.findAllByStatus();
        if (userList.isEmpty()) {
            throw new UserNotFoundException("No User Found !!");
        }
        return userList;
    }

    //Find user by UserId
    @Override
    public User findUserById(int id) {
        if (userRepo.existsById(id)) {
            return userRepo.findById(id).get();
        } else {
            throw new UserNotFoundException("User Not Found With Id " + id);
        }
    }

    //Get user by firstname/lastname/userid/emailid
    @Override
    public List<User> getUser(User user) {
        List<User> userList = userRepo.findByFirstNameOrLastNameOrUserIdOrEmailId(
                user.getFirstName(),
                user.getLastName(),
                user.getUserId(),
                user.getEmailId());
        if (userList.isEmpty()) {
            throw new UserNotFoundException("User Not Found !!");
        }
        return userList;
    }

    //Add new user
    @Override
    public ApiResponse addUser(User user) {
        ApiResponse apiResponse = new ApiResponse();
        CareupServiceImpl service = new CareupServiceImpl();

        //Data validation
        if (!validation.emailValidation(user.getEmailId())) {
            throw new InvalidUserDataException("Invalid Email Id !!");
        } else if (!validation.mobileValidation(user.getMobileNo())) {
            throw new InvalidUserDataException("Invalid Mobile Number !!");
        } else if (!validation.pincodeValidation(user.getPincode())) {
            throw new InvalidUserDataException("Invalid Pincode !!");
        }
//        else if (!validation.isBase64Encoded(user.getPhoto())) {
//            throw new InvalidUserDataException("Invalid Base64 !!");
//        }
        else {
//                String fileName = service.saveImg(user.getPhoto());
//                user.setPhoto(fileName);
            try {
                User savedUser = userRepo.save(user);
                apiResponse.setObj(savedUser);
                apiResponse.setMsg("Successfully Registered !!");
            } catch (RuntimeException e) {
                apiResponse.setObj(null);
                apiResponse.setMsg("User Registration Failed !!");
            }
            return apiResponse;
        }
    }


    //Update exist User Details
    @Override
    public ApiResponse updateUserDetails(User userDetails, int id) {
        if (userRepo.existsById(id)) {
            User user = userRepo.findById(id).get();
            user.setFirstName(userDetails.getFirstName());
            user.setLastName(userDetails.getLastName());
            user.setMobileNo(userDetails.getMobileNo());
            user.setEmailId(userDetails.getEmailId());
            user.setAddress(userDetails.getAddress());
            user.setAddress2(userDetails.getAddress2());
            user.setCity(userDetails.getCity());
            user.setState(userDetails.getState());
            user.setPincode(userDetails.getPincode());
            user.setRole(userDetails.getRole());
            try {
                userRepo.save(user);
                apiResponse.setObj(user);
                apiResponse.setMsg("User updated successfully !!");
            } catch (RuntimeException e) {
                apiResponse.setObj(null);
                apiResponse.setMsg("Failed to update user !!");
            }
            return apiResponse;
        } else {
            throw new UserNotFoundException("User Not Found !!");
        }
    }

    //Update exist user status
    @Override
    public ApiResponse updateUserStatus(boolean userStatus, int id) {
        if (userRepo.existsById(id)) {
            User user = userRepo.findById(id).get();
            user.setStatus(userStatus);
            try {
                User savedUser = userRepo.save(user);
                apiResponse.setObj(savedUser);
                apiResponse.setMsg("User Status Updated !!");
            }catch (RuntimeException e){
                apiResponse.setObj(null);
                apiResponse.setMsg("Failed to update user status !!");
            }
            return apiResponse;
        } else {
            throw new UserNotFoundException("User Not Found !!");
        }
    }

    //save image in directory
    @Override
    public String saveImg(String base64Img) {
        String fileName = UUID.randomUUID().toString();

        //reading path from properties file
        try {
            String systemPath;
            FileReader reader = new FileReader("src/main/resources/application.properties");
            Properties prop = new Properties();
            prop.load(reader);
            systemPath = prop.getProperty("path-name");
            File file1 = new File(systemPath);
            if (!file1.exists()) {
                file1.mkdirs();
            }
            //Saving the image in directory with random name
            String path = systemPath + fileName + ".png";
            byte[] data = DatatypeConverter.parseBase64Binary(base64Img);
            File file = new File(path);
            try (OutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))) {
                outputStream.write(data);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return fileName;
    }

    //Add new role
    @Override
    public ApiResponse addRole(Role role) {
        try {
            Role savedRole = roleRepo.save(role);
            apiResponse.setObj(savedRole);
            apiResponse.setMsg("Role Added Successfully !!");
        } catch (RuntimeException e) {
            apiResponse.setObj(null);
            apiResponse.setMsg("Role Already Exists !!");
        }
        return apiResponse;
    }

    //get all roles
    @Override
    public List<Role> findAllRoles() {
        List<Role> roleList = roleRepo.findAll();
        if (roleList.isEmpty()){
            throw new UserNotFoundException("Roles Not Found !!");
        }
        return roleList;
    }
}
