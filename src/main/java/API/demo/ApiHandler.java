package API.demo;

import java.net.ConnectException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.reactive.function.client.WebClientRequestException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import API.demo.SimulationResults.EntityNotFoundException;

@ControllerAdvice
public class ApiHandler extends ResponseEntityExceptionHandler{
  
  @ExceptionHandler({ ConnectException.class, WebClientRequestException.class })
  protected ResponseEntity<String> handleBug(RuntimeException ex, WebRequest request) {
    // return handleExceptionInternal(ex, ex.getCause(), new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cannot connect to the APIs");
  }
   @ExceptionHandler(EntityNotFoundException.class)
  protected ResponseEntity<String> handleer(RuntimeException ex, WebRequest request) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Entity Not Found");
  }

  @ExceptionHandler(Exception.class)
  protected ResponseEntity<String> handleAll(RuntimeException ex, WebRequest request) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error\n" + ex.getCause());
  }
}
