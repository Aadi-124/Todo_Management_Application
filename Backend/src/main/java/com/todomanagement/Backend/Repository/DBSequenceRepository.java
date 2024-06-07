package com.todomanagement.Backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.todomanagement.Backend.Database.DatabaseSequence;

public interface DBSequenceRepository extends MongoRepository<DatabaseSequence,String>{
    
}
