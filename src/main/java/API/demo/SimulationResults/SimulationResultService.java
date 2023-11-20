package API.demo.SimulationResults;



import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import ch.qos.logback.core.Layout;

import java.util.List;


@Service

public class SimulationResultService {



  private final WebClient webClient = WebClient.create();
  private final String url = "http://localhost:9010/results";


  // Return a list of Simulation results That is of all the Results in the database
  public List<SimulationResult> getAll() {


    List<SimulationResult> results = webClient.get()
        .uri(this.url)
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>(){})
      .toStream().toList();


    return results;
  }
  List<SimulationResult> getByRulesetAndLayout(Integer ruleset, Integer layout) {
      List<SimulationResult> results = webClient.get()
        .uri(this.url)
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>(){})
        .toStream().filter((bottle)-> (bottle.getRuleset_id() == ruleset && bottle.getLayout_id() == layout)).toList();
      return results;

  }
  List<SimulationResult> getByRuleset(Integer ruleset) {
    List<SimulationResult> results = webClient.get()
      .uri(this.url)
      .retrieve()
      .bodyToFlux(new ParameterizedTypeReference<SimulationResult>(){})
      .toStream().filter((bottle)-> (bottle.getRuleset_id() == ruleset)).toList();
    return results;

  }
  List<SimulationResult> getByLayout(Integer layout) {
    List<SimulationResult> results = webClient.get()
      .uri(this.url)
      .retrieve()
      .bodyToFlux(new ParameterizedTypeReference<SimulationResult>(){})
      .toStream().filter((bottle)-> (bottle.getLayout_id() == layout)).toList();
    return results;

  }
  /*private List<SimulationResult> setupSimulations(List<SimulationResult> simulations) {
    List<Ruleset> rulesets = webClient.get()
        .uri("")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<Ruleset>() {})
        .toStream().toList();
    List<Layout> layouts = webClient.get()
        .uri("")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<Layout>() {})
        .toStream().toList();
    simulations.forEach((el) -> {
      el.setLayout(
          layouts.stream().filter((element) -> element.getId().equals(el.getLayout_id()))
              .findFirst()
              .get()
              .getName());
      el.setRuleset(
          rulesets.stream().filter((element) -> element.getId().equals(el.getRuleset_id()))
              .findFirst()
              .get()
              .getName());
    });
    return simulations;
  }*/
}
