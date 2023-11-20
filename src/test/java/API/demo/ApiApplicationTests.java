package API.demo;

import static org.mockito.ArgumentMatchers.isA;

import java.net.URL;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import API.demo.SimulationResults.SimulationResult;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;
import static org.hamcrest.Matchers.*;

@SpringBootTest
class ApiApplicationTests {
	final String BASE_URL = "http://localhost:9005/api/simulations";

	@Test
	void doesApiRun() {
		RestAssured
			.given()
			.when()
				.get(BASE_URL)
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.statusCode(200)
				.contentType(ContentType.JSON)
				.body(is(instanceOf(List.class)));
	}

	@Test
	void pls() {
		RestAssured
			.given()
			.when()
				.get(BASE_URL)
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.statusCode(200)
				.contentType(ContentType.JSON)
				.body(is(instanceOf(List.class)));
	}

}
