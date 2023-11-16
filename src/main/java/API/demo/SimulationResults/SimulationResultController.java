package API.demo.SimulationResults;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

import java.util.List;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SimulationResultController {
  private final SimulationResultService simulationResultService;

  @GetMapping("/simulations")
  ResponseEntity<List<SimulationResult>> getData(@RequestParam(required = false)Integer ruleset, @RequestParam(required = false)Integer layout) {
    if(ruleset != null && layout != null){
      return ResponseEntity.ok(simulationResultService.getByRulesetAndLayout(ruleset, layout));
    } else if (layout != null) {
      return ResponseEntity.ok(simulationResultService.getByLayout(layout));
    } else if (ruleset != null) {
      return ResponseEntity.ok(simulationResultService.getByRuleset(ruleset));
    }
    return ResponseEntity.ok(simulationResultService.getAll());
  }
}
