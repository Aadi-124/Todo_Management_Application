package com.todomanagement.Backend.Entities;

public class Credentials {

    private String username;
    private String password;
    private String email;
    private Integer userid;
    
    public Integer getUserid() {
        return userid;
    }
    public void setUserid(Integer userid) {
        this.userid = userid;
    }
    public Credentials() {
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Credentials(String username, String password, String email, Integer userid) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.userid = userid;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    

}
