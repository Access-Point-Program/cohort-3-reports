package API.demo;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import io.netty.channel.ConnectTimeoutException;

@ControllerAdvice
public class advice extends ResponseEntityExceptionHandler{
    @ExceptionHandler(value = { ConnectTimeoutException.class })
  protected ResponseEntity<Object> handleBug(RuntimeException ex, WebRequest request) {
    return handleExceptionInternal(ex, ex.getCause(), new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
  }
  @ExceptionHandler(value = { Exception.class })
  protected ResponseEntity<Object> handleAll(RuntimeException ex, WebRequest request) {
    return handleExceptionInternal(ex, ex.getCause(), new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, request);
  }
}
