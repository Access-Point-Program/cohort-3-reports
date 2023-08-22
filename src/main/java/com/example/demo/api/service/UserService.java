package com.example.demo.api.service;

import org.springframework.stereotype.Service;
import com.example.demo.api.model.Data;


@Service
public class UserService {


    public Data getRuleSets(String id, String name){
        //make a switch to decide which param is given?
        return new Data(id, name);
    }

    public Data getAllData(){
        return new Data("0", null);
    }
}