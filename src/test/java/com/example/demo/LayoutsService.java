package com.example.demo.services;

import com.example.demo.models.Layout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

@Service
public class LayoutsService {
    @Autowired
    private WebClient webClient;

    public List<Layout> getAllLayouts() {
        Layout mock = new Layout();
        mock.id = 1;
        mock.name = "Bilbo";
        mock.creationDate = "11/01/2023";

        return List.of(mock);
        return this.webClient.get()
                .uri("http://localhost:9010/layouts/")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Layout>>() {})
                .block();
    }
}
   
