package API.demo.SimulationResults;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import API.demo.Layouts.Layout;
import API.demo.Rulesets.Ruleset;
import API.demo.config.AccessPointProperties;

import java.util.List;

@Service

public class SimulationResultService {

  private final WebClient webClient = WebClient.create();
  
  @Autowired
  private AccessPointProperties accessPointProperties;

  // Return a list of Simulation results That is of all the Results in the database
  public List<SimulationResult> getAll() {

    List<SimulationResult> results = webClient.get()
        .uri(accessPointProperties.getSimsApiUrl()+"/results")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>() {
        })
        .toStream().toList();

    return setupSimulations(results);
  }

  public List<SimulationResult> getByRulesetAndLayout(Integer ruleset, Integer layout) {
    List<SimulationResult> results = webClient.get()
        .uri(accessPointProperties.getSimsApiUrl()+"/results")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>() {
        })
        .toStream().filter((bottle) -> (bottle.getRuleset_id() == ruleset && bottle.getLayout_id() == layout)).toList();
    return setupSimulations(results);

  }

  public List<SimulationResult> getByRuleset(Integer ruleset) {
    List<SimulationResult> results = webClient.get()
        .uri(accessPointProperties.getSimsApiUrl()+"/results")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>() {
        })
        .toStream().filter((bottle) -> (bottle.getRuleset_id() == ruleset)).toList();
    return setupSimulations(results);

  }

  public List<SimulationResult> getByLayout(Integer layout) {
    List<SimulationResult> results = webClient.get()
        .uri(accessPointProperties.getSimsApiUrl()+"/results")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<SimulationResult>() {
        })
        .toStream().filter((bottle) -> (bottle.getLayout_id() == layout)).toList();

    return setupSimulations(results);

  }

  // Apply correct conversions
  private List<SimulationResult> setupSimulations(List<SimulationResult> simulations) {
    
    List<Ruleset> rulesets = webClient.get()
        .uri(accessPointProperties.getRulesApiUrl()+"/ruleset")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<Ruleset>() {
        })
        .toStream().toList();

    List<Layout> layouts = webClient.get()
        .uri(accessPointProperties.getRulesApiUrl()+"/layouts")
        .retrieve()
        .bodyToFlux(new ParameterizedTypeReference<Layout>() {
        })
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
  }

}
