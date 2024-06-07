package com.todomanagement.Backend.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.todomanagement.Backend.Entities.AppUser;



public interface AppUserRepository extends MongoRepository<AppUser,Integer>{
        Optional<AppUser> findByName(String name);
}

