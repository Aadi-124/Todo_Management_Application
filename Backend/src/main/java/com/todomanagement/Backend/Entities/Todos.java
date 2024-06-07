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
    private String id; 
    private String description;
    private boolean isDone;
    private String data;
    private Integer like;
    private Integer dislike;
    private String createdDate;


    public Todos() {
    }
    public Todos(String id, String description, boolean isDone, String data, Integer like,
            Integer dislike, String createdDate) {
        this.id = id;
        this.description = description;
        this.isDone = isDone;
        this.data = data;
        this.like = like;
        this.dislike = dislike;
        this.createdDate = createdDate;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
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
        return data;
    }
    public void setData(String data) {
        this.data = data;
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