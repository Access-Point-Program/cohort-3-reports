package API.demo.Rulesets;

import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RulesetService {
    

    private final RestTemplate externalServer = new RestTemplate();
    private final String url = "http://localhost:9010/rulesets";


    // Return a list of Rulesets That is of all the rulesets in the database
    List<Ruleset> mountain(){
        List<Ruleset> output = externalServer.getForObject(url, List.class);

        return output;
    }
 
}
