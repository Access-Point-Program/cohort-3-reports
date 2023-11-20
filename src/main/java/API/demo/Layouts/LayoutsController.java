package API.demo.Layouts;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class LayoutsController {

    @Autowired
    LayoutsService layoutsService;

    @GetMapping("/layouts")
    public ResponseEntity<List<Layout>> getAllLayout() {
        return ResponseEntity.ok()
                .body(this.layoutsService.getAllLayouts());
    }
}