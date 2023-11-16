package com.example.demo.controllers;
package API.demo.Layouts;//idk if i need this


import com.example.demo.Layout;
import com.example.demo.services.LayoutsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/layout")
public class LayoutsController {
    @Autowired
    LayoutsService layoutsService;

    @GetMapping
    public ResponseEntity<?> getAllLayouts() {
        return ResponseEntity.ok().build();
    public ResponseEntity<List<Layout>> getAllLayout() {
        return ResponseEntity.ok()
                .body(this.layoutsService.getAllLayout());
    }
    }
}