package API.demo.SimulationResults;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SimulationResultController {
  private final SimulationResultService simulationResultService;

  @GetMapping("/simulations")
  ResponseEntity<List<SimulationResult>> getData() {
    List<SimulationResult> output = simulationResultService.mountain();
    return ResponseEntity.ok().body(output);
  }
}
