package com.example.demo;

import com.example.demo.models.Layout;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.apache.http.HttpHeaders;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class LayoutsControllerTests {

	private static MockWebServer mockWebServer;

	@LocalServerPort
	private Integer port;

	@Autowired
	private WebClient webClient;


	@Before
	public void beforeEach() {
	public void beforeEach() throws IOException {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = this.port;
		mockWebServer = new MockWebServer();
		// 9005 is used because that is the port for the rules API
		mockWebServer.start(9005);
	}

	@After
	public void afterEach() throws IOException {
		mockWebServer.shutdown();
	}

	@Test
    public void whenGetAllLayouts_thenRespondWith200() {
        given()
			.when().get("/layout")
			.then().statusCode(200);
	}

	@Test
	public void whenGetAllLayoutsIsCalled_thenItReturnsTheExpectedValues() throws JsonProcessingException {
		Layout mock1 = new Layout();
		mock1.id = 1;
		mock1.name = "Bilbo";
		mock1.creationDate = "11/01/2023";

		Layout mock2 = new Layout();
		mock2.id = 2;
		mock2.name = "Carol";
		mock2.creationDate = "11/01/3023";

		mockWebServer.enqueue(new MockResponse()
				.addHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.setBody(new ObjectMapper().writeValueAsString(List.of(mock1, mock2)))
		);

		given()
			.when().get("/layout")
			.then()
				.body("[0]", hasEntry("id", 1))
				.body("[0]", hasEntry("name", "Bilbo"))
				.body("[0]", hasEntry("creation_date", "11/01/2023"))
				.body("[1]", hasEntry("id", 2))
				.body("[1]", hasEntry("name", "Carol"))
				.body("[1]", hasEntry("creation_date", "11/01/3023"));
	}
	@Test //logging the request details
public void whenLogRequest_thenOK() {
    given().log().all()
      .when().get("/layouts")
      .then().statusCode(200);
}
}
}