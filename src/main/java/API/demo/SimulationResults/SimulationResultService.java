package API.demo.SimulationResults;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service

public class SimulationResultService {

  private final RestTemplate externalServer = new RestTemplate();
  private final String url = "http://localhost:9010/rulesets";


  // Return a list of Simulation results That is of all the Results in the database
  List<SimulationResult> mountain() {
    List<SimulationResult> output = externalServer.getForObject(url, List.class);

    return output;
  }
}
