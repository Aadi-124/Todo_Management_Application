package com.todomanagement.Backend.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class AppUser{

    public static final String SEQUENCE_NAME = "USER_SEQUENCE";
    @Id
    private Integer id;
    private String name;
    private String password;
    private String role;
    private String email;
    private String phone;
    private String dob;
    private String profilePic;
    private String otp;
    private String accountcreationdate;
    private Integer nooftodos;

    
    public Integer getNooftodos() {
        return nooftodos;
    }
    public void setNooftodos(Integer nooftodos) {
        this.nooftodos = nooftodos;
    }
    public AppUser(){
    }
    public AppUser(Integer id, String name, String password, String role, String email, String phone, String dob,
            String profilePic, String otp, String accountcreationdate, Integer nooftodos) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
        this.profilePic = profilePic;
        this.otp = otp;
        this.accountcreationdate = accountcreationdate;
        this.nooftodos = nooftodos;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getDob() {
        return dob;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }
    public String getProfilePic() {
        return profilePic;
    }
    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }
    public String getOtp() {
        return otp;
    }
    public void setOtp(String otp) {
        this.otp = otp;
    }
    public String getAccountcreationdate() {
        return accountcreationdate;
    }
    public void setAccountcreationdate(String accountcreationdate) {
        this.accountcreationdate = accountcreationdate;
    }
}
