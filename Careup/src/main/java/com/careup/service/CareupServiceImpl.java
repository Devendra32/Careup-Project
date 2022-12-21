package com.careup.service;

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
import java.util.List;
import java.util.Properties;
import java.util.UUID;

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

    @Override
    public List<User> findAllUser() {
        List<User> userList = userRepo.findAll();
        return userList;
    }

    @Override
    public ApiResponse addUser(User user) {
        ApiResponse apiResponse = new ApiResponse();
        CareupServiceImpl service = new CareupServiceImpl();

        //Data validation
        if (!validation.emailValidation(user.getEmailId())) {
            apiResponse.setMsg("Email is not valid");
            return apiResponse;
        } else if (!validation.mobileValidation(user.getMobileNo())) {
            apiResponse.setMsg("Mobile number is not valid");
            return apiResponse;
        } else if (!validation.pincodeValidation(user.getPincode())) {
            apiResponse.setMsg("Pin code is not valid");
            return apiResponse;
        }
//        else if (!validation.isBase64Encoded(user.getPhoto())) {
//            apiResponse.setMsg("Invalid base64...");
//            return apiResponse;
//        }
        else {
            try {
//                String fileName = service.saveImg(user.getPhoto());
//                user.setPhoto(fileName);
                userRepo.save(user);
                apiResponse.setMsg("User successfully added...");
            } catch (Exception e) {
                apiResponse.setMsg("Failed to add user...");
                e.printStackTrace();
            }
            return apiResponse;
        }
    }

    @Override
    public List<User> getUser(User user) {
        List<User> users = userRepo.findByFirstNameOrLastNameOrUserIdOrEmailId(
                user.getFirstName(),
                user.getLastName(),
                user.getUserId(),
                user.getEmailId());
        return users;
    }


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

    @Override
    public ApiResponse addRole(Role role) {
        try{
            roleRepo.save(role);
            apiResponse.setMsg("Role Added Successfully...");
        }catch (Exception e){
            apiResponse.setMsg("Failed to add role...");
            e.printStackTrace();
        }
        return apiResponse;
    }

    @Override
    public List<Role> findAllRoles() {
        List<Role> roles = roleRepo.findAll();
        return roles;
    }

//    @Override
//    public List<User> getUserByRole(Role role) {
//        List<User> byRole = userRepo.findByRole(role);
//        return byRole;
//    }
}
