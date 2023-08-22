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

    //Mapped depending on the data requested
    @GetMapping("/factoryrulesets")
    public Data getRuleSetData(){// no need for params.
        return service.getRuleSets(9, "ruleSet");
    }

    @GetMapping("/factoryrulesets/filter")
    public Data getRuleSetFilterData(@RequestParam(value = "filter1", defaultValue = "null") String filter1, @RequestParam(value = "filter2", defaultValue = "0") Integer filter2){// no need for params.
        return service.getRuleSets(filter2, filter1);
    }

    @GetMapping("/factorylayoutnames")
    public Data getLayoutData(@RequestParam String layout){
        return service.getLayout(layout);
    }

    @GetMapping("/factorylayoutnames/filter")
    public Data getLayoutFilterData(@RequestParam(value = "filter1", defaultValue = "null") String filter1, @RequestParam(value = "filter2", defaultValue = "0") Integer filter2){// no need for params.
        return service.getRuleSets(filter2, filter1);
    }


}
