package com.example.demo.api.model;

public class Data {
    //The data itself will be integreted with postgres

    //Mock Data For testing
    public String id;
    public String name;

    //setter
    public Data(String id, String name){
        this.id = id;
        this.name = name;
    }

    //getters
    public String getId(){
        return id;
    }

    public String getName(){
        return name;
    }
}
