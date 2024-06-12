package com.todomanagement.Backend.Entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Todos
{

    @Transient
    public static final String SEQUENCE_NAME = "TODOS_SEQUENCE";
    @Id
    private Integer id; 
    private Integer userid; 
    private String description;
    private boolean isDone;
    private String targetedDate;
    private Integer like;
    private Integer dislike;
    private String createdDate;
    private Integer userspecifictodoid;
    private String updatedDate;


    public String getUpdatedDate() {
        return updatedDate;
    }
    public void setUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
    }
    public String getTargetedDate() {
        return targetedDate;
    }
    public void setTargetedDate(String targetedDate) {
        this.targetedDate = targetedDate;
    }
    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }
    public Integer getUserspecifictodoid() {
        return userspecifictodoid;
    }
    public void setUserspecifictodoid(Integer userspecifictodoid) {
        this.userspecifictodoid = userspecifictodoid;
    }
    public Todos() {
    }
    public Todos(Integer id, String description, boolean isDone, String targetedDate, Integer like,
            Integer dislike, String createdDate,Integer userid, Integer userspecifitodoid, String updatedDate) {
        this.id = id;
        this.description = description;
        this.isDone = isDone;
        this.targetedDate = targetedDate;
        this.like = like;
        this.dislike = dislike;
        this.createdDate = createdDate;
        this.userid = userid;
        this.userspecifictodoid = userspecifitodoid;
        this.updatedDate = updatedDate;
    }
    public Integer getUserid(){
        return userid;
    }
    public void setUserid(Integer userid){
        this.userid = userid;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public boolean getIsDone() {
        return isDone;
    }
    public void setIsDone(boolean isDone) {
        this.isDone = isDone;
    }
    public String getData() {
        return targetedDate;
    }
    public void setData(String tergetedDate) {
        this.targetedDate = tergetedDate;
    }
    public Integer getLike() {
        return like;
    }
    public void setLike(Integer like) {
        this.like = like;
    }
    public Integer getDislike() {
        return dislike;
    }
    public void setDislike(Integer dislike) {
        this.dislike = dislike;
    }
    public String getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    } 

    
}