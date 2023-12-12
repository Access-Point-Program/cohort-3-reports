package API.demo;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.function.client.WebClient;

import API.demo.Layouts.Layout;
import API.demo.Layouts.LayoutsService;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LayoutServiceTests {
    

    @LocalServerPort
    private Integer port;

    @MockBean
    private LayoutsService layoutService;

    @MockBean
    private WebClient webClient;
    

    @Before
    public void init() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = this.port;

        Mockito.when(layoutService.getAllLayouts()).thenReturn(List.of());
    }

    
    @Test
    public void layoutsReturnsCorrectContentType(){
        given()
                .when().get("/api/layouts")
                .then().log().ifValidationFails(LogDetail.ALL)
                .contentType(ContentType.JSON);
    }

    @Test
    public void LayoutReturnsCorrectStatusCode() {

        given()
                .when().get("/api/layouts")
                .then().log().ifValidationFails(LogDetail.ALL)
                .statusCode(200);
    }

    @Test
    public void LayoutReturnsCorrectBody() {

        List<Layout> lt = List.of(new Layout());
        Mockito.when(layoutService.getAllLayouts()).thenReturn(lt);


        given()
                .when().get("/api/layouts")
                .then().log().ifValidationFails(LogDetail.ALL)
                .body("", instanceOf(List.class));
    }

}
