package API.demo.Rulesets;

import java.util.List;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class RulesetService {
    

    private final WebClient webclient = WebClient.create(); 
    private final String url = "http://localhost:9010/rulesets";


    // Return a list of Rulesets That is of all the rulesets in the database
    List<Ruleset> getAllRulesets(){
        List<Ruleset> output = webclient.get()
            .uri(url)
            .retrieve()
            .bodyToFlux(new ParameterizedTypeReference<Ruleset>() {})
            .toStream()
            .toList();

        return output;
    }
 
}
