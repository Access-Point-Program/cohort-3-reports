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

       //return all the data
    @GetMapping("/")
    public Data getData(){
        return service.getAllData();
    }
   
       
    //return data based on defined ruleset and/or layout
    @GetMapping("/filter")
    public Data getRuleSetData(@RequestParam(value = "filter1", defaultValue = "null") String filter1, @RequestParam(value = "filter2", defaultValue = "null") String filter2){
        return service.getRuleSets(filter1, filter2);
    }

}
