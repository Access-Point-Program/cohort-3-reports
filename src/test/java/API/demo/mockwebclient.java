package API.demo;

import static org.mockito.Mockito.when;

import java.util.List;

import org.mockito.Mock;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Flux;

public class mockwebclient {
    @Mock
    private WebClient webClient;

    public WebClient getWebClient() {
        return webClient;
    }

    public void mockListRunsResponse() {
        when(webClient.get().uri("http://localhost:9010/simulations").retrieve().bodyToFlux(List.class))
                .thenReturn(Flux.just());
    }
}
