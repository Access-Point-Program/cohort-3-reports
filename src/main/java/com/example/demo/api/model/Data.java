package com.example.demo.api.model;

public class Data {
    //The data itself will be integreted with postgres

    //Mock Data For testing
    public int id;
    public String name;

    //setter
    public Data(int id, String name){
        this.id = id;
        this.name = name;
    }

    //getters
    public int getId(){
        return id;
    }

    public String getName(){
        return name;
    }
}
