package API.demo.Layouts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import API.demo.config.AccessPointProperties;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LayoutsService {
    
    @Autowired
    private final WebClient webClient;

    
    private final AccessPointProperties accessPointProperties;

    public List<Layout> getAllLayouts() {
        

        return this.webClient.get()
                .uri(accessPointProperties.getLayoutsApiUrl()+ "/layouts")
                .retrieve()
                .bodyToFlux(new ParameterizedTypeReference<Layout>() {})
                .toStream()
                .toList();
    }
}
   
