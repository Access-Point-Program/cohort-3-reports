package API.demo.Layouts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

@Service
public class LayoutsService {
    
    @Autowired
    private WebClient webClient;

    public List<Layout> getAllLayouts() {
        

        return this.webClient.get()
                .uri("http://localhost:9004/layouts")
                .retrieve()
                .bodyToFlux(new ParameterizedTypeReference<Layout>() {})
                .toStream().toList();
    }
}
   
