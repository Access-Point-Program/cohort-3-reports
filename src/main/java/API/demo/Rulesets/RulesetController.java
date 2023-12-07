package API.demo.Rulesets;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RulesetController {
    
    private final RulesetService rulesetService;
    
    @GetMapping("/rulesets")
    ResponseEntity<List<Ruleset>> getData(){
        List<Ruleset> output = rulesetService.getAllRulesets();
        return ResponseEntity.ok().body(output);
    }
}
