package com.todomanagement.Backend.Entities;


public class UserAuthorization {
    
    private String authToken;
    private String role;
    private boolean isAuthenticated;
    private String userid;
    private String username;
    
    public UserAuthorization(String authToken, String role, boolean isAuthenticated, String userid, String username) {
        this.authToken = authToken;
        this.role = role;
        this.isAuthenticated = isAuthenticated;
        this.userid = userid;
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public UserAuthorization() {
    }
    public String getAuthToken() {
        return authToken;
    }
    public void setAuthToken(String authToken) {
        this.authToken = authToken;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public boolean isAuthenticated() {
        return isAuthenticated;
    }
    public void setAuthenticated(boolean isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
    }
    public String getUserid() {
        return userid;
    }
    public void setUserid(String userid) {
        this.userid = userid;
    }

    

}
