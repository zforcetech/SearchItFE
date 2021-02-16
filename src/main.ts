import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Keycloak from 'keycloak-js'


if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

  let initOptions = {
  url: 'https://152.67.162.208:8443/auth', realm: 'master', clientId: 'searchItFE'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: "login-required" }).success((auth) => {

  if (!auth) {
    window.location.reload();
  } else {
    console.log("Authenticated");
  }

  //bootstrap after authentication is successful.
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));


  // localStorage.setItem("ang-token", keycloak.token);
  // localStorage.setItem("ang-refresh-token", keycloak.refreshToken);

  // setTimeout(() => {
  //   keycloak.updateToken(70).success((refreshed) => {
  //     if (refreshed) {
  //       console.debug('Token refreshed' + refreshed);
  //     } else {
  //       console.warn('Token not refreshed, valid for '
  //         + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
  //     }
  //   }).error(() => {
  //     console.error('Failed to refresh token');
  //   });


  // }, 60000)

}).error(() => {
  console.error("Authenticated Failed");
});
