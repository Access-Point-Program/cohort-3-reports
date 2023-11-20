package API.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import API.demo.Rulesets.Ruleset;
import io.restassured.RestAssured;
import io.restassured.filter.log.LogDetail;

@SpringBootTest(classes = {API.demo.ApiApplication.class})
class ApiApplicationTests {

	@Test
	void rulesetsWorks() {
		RestAssured
			.when()
				.get("http://localhost:9005/api/rulesets")
			.then()
				.log().ifValidationFails(LogDetail.ALL)
				.statusCode(200)
				.extract().jsonPath().getList("$", Ruleset.class);
	}

}
