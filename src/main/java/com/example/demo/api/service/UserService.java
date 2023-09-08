package com.example.demo.api.service;

import org.springframework.stereotype.Service;
import com.example.demo.api.model.Data;

@Service
public class UserService {

    public Data getAllData() {
        return new Data("0", "All data");
    }

    public Data getFilteredData(String filter1, String filter2) {
        // make a switch to decide which param is given?
        return new Data(filter1, filter2);
    }

    public Data getRuleSets() {
        return new Data("0", "RuleSetData");
    }

    public Data getLayouts() {
        return new Data("0", "LayoutsData");
    }

}