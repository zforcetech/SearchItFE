import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContentComponent } from './content/content.component';
import { PilotComponent } from './content/pilot/pilot.component';
import { MatterComponent } from './content/matter/matter.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AuthService } from "./service/auth.service";
import { KeycloakService } from 'keycloak-angular';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'https://152.67.162.208:8443/auth',
//         realm: 'master',
//         clientId: 'searchItFE',
//       },
//       // initOptions: {
//         // onLoad: 'check-sso',
//         // silentCheckSsoRedirectUri:
//         //   window.location.origin + '/assets/silent-check-sso.html',
//       // },
//     });
// }



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    PilotComponent,
    MatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [
//     AuthService,
// KeycloakService,
//     {
//       provide: APP_INITIALIZER,
//       useFactory: initializeKeycloak,
//       multi: true,
//       deps: [KeycloakService],
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


