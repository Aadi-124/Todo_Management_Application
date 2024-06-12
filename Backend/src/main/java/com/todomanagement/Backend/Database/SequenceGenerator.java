package com.todomanagement.Backend.Database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todomanagement.Backend.Repository.DBSequenceRepository;
@Service
public class SequenceGenerator {

    
    @Autowired
    DBSequenceRepository repository;

        public Integer generateSequence(String seqName){

            try{
                DatabaseSequence sequence = repository.findById(seqName).get();
                Integer Id = sequence.getSequence();
                sequence.setSequence(Id+1);
                repository.save(sequence);
                return Id;
            } catch(Exception E){
                DatabaseSequence sequence = new DatabaseSequence(seqName, 2);
                repository.save(sequence);
                return 1;
            }
            
        }
}