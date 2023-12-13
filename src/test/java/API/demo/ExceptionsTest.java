package API.demo;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientRequestException;

import API.demo.Layouts.LayoutsService;
import API.demo.Rulesets.RulesetService;
import API.demo.SimulationResults.SimulationResultService;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExceptionsTest {
        

    @LocalServerPort
    private Integer port;

    @MockBean
    private LayoutsService layoutService;

    @MockBean
    private RulesetService rulesetService;

    @MockBean
    private SimulationResultService simulationService;

    @MockBean
    private WebClient webClient;
    

    @Before
    public void init() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = this.port;

        Mockito.when(layoutService.getAllLayouts()).thenThrow(WebClientRequestException.class);
        Mockito.when(rulesetService.getAllRulesets()).thenThrow(WebClientRequestException.class);
        Mockito.when(simulationService.getAll()).thenThrow(WebClientRequestException.class);
    }

    @Test
    public void LayoutReturnsCorrectStatusCodeWithoutServer() {

        given()
                .when().get("/api/layouts")
                .then().log().ifValidationFails(LogDetail.ALL)
                .statusCode(404);
    }

    @Test
    public void layoutsReturnsCorrectContentType(){
        given()
                .when().get("/api/layouts")
                .then().log().ifValidationFails(LogDetail.ALL)
                .contentType(ContentType.TEXT);
    }

    @Test
    public void LayoutReturnsCorrectStatusCode() {

        given()
                .when().get("/api/layouts")
                .then().log().ifValidationFails(LogDetail.ALL)
                .body( equalTo("Cannot connect to the APIs"));
    }



    @Test
    public void RulesetReturnsCorrectStatusCodeWithoutServer() {

        given()
                .when().get("/api/rulesets")
                .then().log().ifValidationFails(LogDetail.ALL)
                .statusCode(404);
    }

    @Test
    public void RulesetReturnsCorrectContentType(){
        given()
                .when().get("/api/rulesets")
                .then().log().ifValidationFails(LogDetail.ALL)
                .contentType(ContentType.TEXT);
    }

    @Test
    public void RulesetReturnsCorrectStatusCode() {

        given()
                .when().get("/api/rulesets")
                .then().log().ifValidationFails(LogDetail.ALL)
                .body(equalTo("Cannot connect to the APIs"));
    }

    
    @Test
    public void SimulationReturnsCorrectStatusCodeWithoutServer() {

        given()
                .when().get("/api/simulations")
                .then().log().ifValidationFails(LogDetail.ALL)
                .statusCode(404);
    }

    @Test
    public void SimulationReturnsCorrectContentType(){
        given()
                .when().get("/api/simulations")
                .then().log().ifValidationFails(LogDetail.ALL)
                .contentType(ContentType.TEXT);
    }

    @Test
    public void SimulationReturnsCorrectStatusCode() {

        given()
                .when().get("/api/simulations")
                .then().log().ifValidationFails(LogDetail.ALL)
                .body( equalTo("Cannot connect to the APIs"));
    }
    
}
