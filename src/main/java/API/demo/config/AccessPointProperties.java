package API.demo.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;
import lombok.Setter;

@Configuration
@ConfigurationProperties("access-point")
public class AccessPointProperties {
    
    @Getter
    @Setter
    private String rulesApiUrl;

    @Getter
    @Setter
    private String simsApiUrl;
    
    @Getter
    @Setter
    private String layoutsApiUrl;
}
