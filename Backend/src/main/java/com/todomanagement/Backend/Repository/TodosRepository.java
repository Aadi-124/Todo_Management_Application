package com.todomanagement.Backend.Repository;



import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.todomanagement.Backend.Entities.Todos;

public interface TodosRepository extends MongoRepository<Todos,Integer> {
    
    List<Todos> findByUserid(Integer userid);

}
