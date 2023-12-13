package API.demo;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.instanceOf;

import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.function.client.WebClient;

import API.demo.Rulesets.Ruleset;
import API.demo.Rulesets.RulesetService;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RulesetsServiceTests {
     

    @LocalServerPort
    private Integer port;

    @MockBean
    private RulesetService rulesetService;

    @MockBean
    private WebClient webClient;
    

    @Before
    public void init() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = this.port;

        Mockito.when(rulesetService.getAllRulesets()).thenReturn(List.of());
    }

    
    @Test
    public void RulesetsReturnsCorrectContentType(){
        given()
                .when().get("/api/rulesets")
                .then().log().ifValidationFails(LogDetail.ALL)
                .contentType(ContentType.JSON);
    }

    @Test
    public void RulesetReturnsCorrectStatusCode() {

        given()
                .when().get("/api/rulesets")
                .then().log().ifValidationFails(LogDetail.ALL)
                .statusCode(200);
    }

    @Test
    public void RulesetReturnsCorrectBody() {

        List<Ruleset> lt = List.of(new Ruleset());
        Mockito.when(rulesetService.getAllRulesets()).thenReturn(lt);


        given()
                .when().get("/api/rulesets")
                .then().log().ifValidationFails(LogDetail.ALL)
                .body("", instanceOf(List.class));
    }

}
