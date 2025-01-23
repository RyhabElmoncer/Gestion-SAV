package com.sav.gestion_sav.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

  private final AuthenticationService service;
  public AuthenticationController(AuthenticationService service) {
    this.service = service;
  }
  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
    try {
      AuthenticationResponse response = service.signup(request);
      return new ResponseEntity<>(response, HttpStatus.CREATED);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.badRequest().body(AuthenticationResponse.builder()
              .message(e.getMessage())
              .build());
    }
  }
  @PostMapping("/registertech")
  public ResponseEntity<AuthenticationResponse> registertech(@RequestBody RegisterRequest request) {
    try {
      AuthenticationResponse response = service.signupTch(request);
      return new ResponseEntity<>(response, HttpStatus.CREATED);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.badRequest().body(AuthenticationResponse.builder()
              .message(e.getMessage())
              .build());
    }
  }

  // Endpoint for user authentication (login)
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
    try {
      AuthenticationResponse response = service.authenticate(request);
      return ResponseEntity.ok(response);
    } catch (IllegalArgumentException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
              .body(AuthenticationResponse.builder()
                      .message("Authentication failed: " + e.getMessage())
                      .build());
    }
  }
  @PostMapping("/refresh-token")
  public void refreshToken(
      HttpServletRequest request,
      HttpServletResponse response
  ) throws IOException {
    service.refreshToken(request, response);
  }


}
