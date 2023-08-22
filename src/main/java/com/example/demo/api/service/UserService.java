package com.example.demo.api.service;

import org.springframework.stereotype.Service;
import com.example.demo.api.model.Data;


@Service
public class UserService {


    public Data getRuleSets(int id, String name){
        return new Data(id, name);
    }

    public Data getLayout(String layout){
        return new Data(0, layout);
    }
}
