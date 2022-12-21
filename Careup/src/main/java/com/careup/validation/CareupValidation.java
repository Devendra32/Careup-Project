package com.careup.validation;
import org.springframework.stereotype.Component; 
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class CareupValidation {
    public boolean emailValidation(String emailId) {
        String ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        Pattern p = Pattern.compile(ePattern);
        Matcher m = p.matcher(emailId);
        return m.matches();
    }

    public boolean mobileValidation(String mobile) {
        return Pattern.matches("[6789][0-9]{9}", mobile);
    }
    public boolean pincodeValidation(String pincode) {
        return Pattern.matches("[1-9][0-9]{5}", pincode);
    }
    public boolean isBase64Encoded(String s) {
        String substring="";
        if (!(s.length()<30)){
            substring = s.substring(0, 28);
        }
        return substring.equalsIgnoreCase("/9j/4AAQSkZJRgABAQEBLAEsAAD/");
    }
}