package com.todomanagement.Backend.Security;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.todomanagement.Backend.Entities.AppUser;
import com.todomanagement.Backend.Repository.AppUserRepository;

@Service
public class MongoDBUserDetailsService implements UserDetailsService{
    

    @Autowired
    public AppUserRepository repository;

    @Autowired
    public PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
            Optional<AppUser> appUser = repository.findByName(username);
            if(appUser.isPresent()){
                AppUser user = appUser.get();
                return User.builder()
                    .username(user.getName())
                    .password(passwordEncoder.encode(user.getPassword()))
                    .roles(user.getRole())
                    .build();
            } else {
                throw new UsernameNotFoundException(username);
            }
    }
}

