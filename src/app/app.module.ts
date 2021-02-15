import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContentComponent } from './content/content.component';
import { PilotComponent } from './content/pilot/pilot.component';
import { MatterComponent } from './content/matter/matter.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService } from './keycloak.service';



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
  providers: [ KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function kcFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}
