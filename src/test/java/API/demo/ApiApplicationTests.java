package API.demo;


import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;
import org.mockito.Mockito;
import API.demo.SimulationResults.SimulationResultService;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApiApplicationTests {

	@LocalServerPort
    private Integer port;


	@MockBean
    private SimulationResultService myService;

	@Before
    public void init() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = this.port;

		Mockito.when(myService.getAll()).thenReturn(List.of());
    }


	@Test
	void SimulationReturnsCorrectContentType() {
		
			given()
			.when()
				.get("/api/simulations")
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.contentType(ContentType.JSON);
	}

	@Test
	void SimulationReturnsCorrectStatusCode() {
		
			given()
			.when()
				.get("/api/simulations")
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.statusCode(200);
	}

	@Test
	void SimulationReturnsCorrectBody() {

		 
			given()
			.when()
				.get("/api/simulations")
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.body(instanceOf(List.class)); 
  }

}
