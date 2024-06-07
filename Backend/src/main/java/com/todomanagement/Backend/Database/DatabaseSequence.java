package com.todomanagement.Backend.Database;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "database_sequences")
public class DatabaseSequence {

    @Id
    private String id;

    private Integer sequence;

    

    public DatabaseSequence(String id, Integer sequence) {
        this.id = id;
        this.sequence = sequence;
    }

    public DatabaseSequence() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getSequence() {
        return sequence;
    }

    public void setSequence(Integer sequence) {
        this.sequence = sequence;
    }

    


}
