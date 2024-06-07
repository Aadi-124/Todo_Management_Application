package com.todomanagement.Backend.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.ReadOnlyProperty;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.todomanagement.Backend.Database.DatabaseSequence;
import com.todomanagement.Backend.Database.SequenceGenerator;
import com.todomanagement.Backend.Entities.AppUser;
import com.todomanagement.Backend.Entities.Todos;
import com.todomanagement.Backend.Repository.DBSequenceRepository;
import com.todomanagement.Backend.Repository.AppUserRepository;
import com.todomanagement.Backend.Repository.TodosRepository;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TodoController {
    
    public Integer autoIncId = 0;

    @Autowired
    public TodosRepository repository;
    
    @Autowired
    public DBSequenceRepository sequenceRepository;

    @Autowired
    public SequenceGenerator sequencegenerator;

    @Autowired
    public AppUserRepository securityRepository;
    
    @PostMapping("/public/register")
    public boolean registerUser(@RequestBody AppUser user){
        user.setId(sequencegenerator.generateSequence(AppUser.SEQUENCE_NAME));
        // user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setPassword(user.getPassword());
        securityRepository.save(user);
        return true;
    }

    @GetMapping("/admin")
    public String admin(){
        return "ADMIN ACCESS";
    }

    @GetMapping("/users")
    public String user(){
        return "USER ACCESS";
    }
    
    // @Autowired
    // public PasswordEncoder passwordEncoder;
    
    // @GetMapping("/basicAuth")
    // public String basicAuthorization(){
    //     return "Success";
    // }
    
    // @GetMapping("/users/todos")
    // public List<Todos> getTodos(){
    //     // return service.getAllTodos();
    //     return repository.findAll();
    // }


    // @DeleteMapping("/users/todos/{Id}")
    // public String deleteTodos(@PathVariable String Id){
    //     repository.deleteById(Id);
    //     return Id;
    // }

    // @GetMapping("/users/todos/{Id}")
    // public Todos getTodo(@PathVariable String Id){
    //     return repository.findById(Id).get();
    // }


    // @GetMapping("/users/sample/{name}/{todo}")
    // public String sample(@PathVariable String name, @PathVariable String todo){
    //     return "name = "+name+"\ntodo = "+todo;
    // }

    // @PutMapping("/users/updatetodo/{id}")
    // public Todos putMethodName(@PathVariable int id, @RequestBody Todos todo) {
    //     repository.save(todo);
    //     return todo;
    // }

    // @PostMapping("/users/addtodo")
    // public Todos addTodo(@RequestBody Todos todo){
    //     todo.setId(Integer.toString(sequencegenerator.generateSequence(Todos.SEQUENCE_NAME)));
    //     Todos singleTodo = repository.save(todo);
    //     return singleTodo;
    // }

    // @PutMapping("/users/setisdone/{id}")
    // public boolean setIsDone(@PathVariable String id){
    //     Todos todo = repository.findById(id).get();
    //     todo.setIsDone(true);
    //     repository.save(todo);
    //     return true;
    // }
    
    // @GetMapping("/users/getseq")
    // public DatabaseSequence getSeq(){
    //     return sequenceRepository.save(new DatabaseSequence("seq_todos", 1002));
    // }


}
