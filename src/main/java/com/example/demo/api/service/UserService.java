package com.example.demo.api.service;

import org.springframework.stereotype.Service;
import com.example.demo.api.model.Data;


@Service
public class UserService {
    

    public Data getId(int id){
        return new Data(id, "null");
    }
}
