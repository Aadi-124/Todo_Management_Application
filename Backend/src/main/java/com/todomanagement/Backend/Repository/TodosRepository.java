package com.todomanagement.Backend.Repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.todomanagement.Backend.Entities.Todos;

public interface TodosRepository extends MongoRepository<Todos,String> {
    
}
