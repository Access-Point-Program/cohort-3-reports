package API.demo.SimulationResults;



import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Flux;

@Service

public class SimulationResultService {



  private final WebClient webClient = WebClient.create();
  private final String url = "http://localhost:9010/results";


  // Return a list of Simulation results That is of all the Results in the database
  Flux<SimulationResult> mountain() {
   

    Flux<SimulationResult> results = webClient.get()
        .uri(this.url)
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>(){})
        ;


    return results;
  }
  Flux<SimulationResult> returningFunction(Integer ruleset, Integer layout) {
      Flux<SimulationResult> results = webClient.get()
        .uri(this.url)
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>(){})
        ;

        // this is where we ended
    for(result: results){
    }
      
  }
}
