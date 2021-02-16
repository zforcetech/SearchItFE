import { Injectable } from '@angular/core';
import { KeycloakService } from "keycloak-angular";

@Injectable({
  providedIn:'root'
})
export class AuthService {

  private keycloakService: KeycloakService;

  constructor(keycloakService: KeycloakService) {
this.keycloakService =keycloakService;
  }

  logout(){
    this.keycloakService.logout();
  }
}
