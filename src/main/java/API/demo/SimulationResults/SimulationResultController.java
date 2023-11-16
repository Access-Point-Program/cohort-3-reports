package API.demo.SimulationResults;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SimulationResultController {
  private final SimulationResultService simulationResultService;

  @GetMapping("/simulations")
  ResponseEntity<Flux<SimulationResult>> getData(@RequestParam(required = false)Integer ruleset,@RequestParam(required = false)Integer layout) {
    Flux<SimulationResult> output;
    if(ruleset != null && layout != null){
      return null;
    } else if (layout != null) {
      return null;
    } else if (ruleset != null) {
      return null;
    }
    return ResponseEntity.ok().body(output);
  }
}
