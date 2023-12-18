package API.demo.Rulesets;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import API.demo.config.AccessPointProperties;

@Service
public class RulesetService {
    

    private final WebClient webclient = WebClient.create(); 
    
    @Autowired
    private AccessPointProperties accessPointProperties;


    // Return a list of Rulesets That is of all the rulesets in the database
    public List<Ruleset> getAllRulesets(){
        List<Ruleset> output = webclient.get()
            .uri(accessPointProperties.getRulesApiUrl()+"/ruleset-extended")
            .retrieve()
            .bodyToFlux(new ParameterizedTypeReference<Ruleset>() {})
            .toStream()
            .toList();

        return output;
    }
 
}
