package com.todomanagement.Backend.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.todomanagement.Backend.Entities.AppUser;
import java.util.List;




public interface AppUserRepository extends MongoRepository<AppUser,Integer>{
        Optional<AppUser> findByName(String name);
        Optional<AppUser> findByEmail(String email);
}

