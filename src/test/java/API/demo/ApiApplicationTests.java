package API.demo;


import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import API.demo.SimulationResults.SimulationResult;
import API.demo.SimulationResults.SimulationResultService;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ApiApplicationTests {
	@Autowired
    private SimulationResultService myService;

    @MockBean
    private mockwebclient mockWebClient;

	final String BASE_URL = "http://localhost:9005/api/simulations";

	@Test
	void doesApiRun() {
		RestAssured
			.given()
			.when()
				.get(BASE_URL)
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.contentType(ContentType.JSON)
				.body(is(instanceOf(List.class)));
	}

	@Test
	void doesApiRetunSameStatuscode() {
		RestAssured
			.given()
			.when()
				.get(BASE_URL)
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.statusCode(200)
				.contentType(ContentType.JSON);
	}

	@Test
	void pls() {
		mockWebClient.mockListRunsResponse();

        List<SimulationResult> runs = myService.getAll();
		assertTrue(runs.isEmpty());
		/* RestAssured
			.given()
			.when()
				.get(BASE_URL)
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.statusCode(200)
				.contentType(ContentType.JSON)
				.body(is(instanceOf(List.class))); */
	}

}
