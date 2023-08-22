package com.example.demo.api.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.Data;
import com.example.demo.api.service.UserService;

@RestController
public class Controller {

    private UserService service;
    
    @Autowired
    public Controller(UserService service){
        this.service = service;
    }

    @GetMapping("/trial")
    public Data getData(@RequestParam Integer id){
        return service.getId(id);
    }
}
