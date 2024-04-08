import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {EnvConfigService} from "./env-config/env-config.service";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeEnvConfigAndKeycloak(keycloak: KeycloakService, envConfigService: EnvConfigService) {
  return () => new Promise<boolean>((resolve) => {
    envConfigService.getConfig().then(envConfig => {
      resolve(keycloak.init({
        config: {
          url: envConfig.keycloakFrontendUrl,
          realm: envConfig.keycloakRealm,
          clientId: envConfig.keycloakClient,
        },
        loadUserProfileAtStartUp: true,
        initOptions: {
          onLoad: 'login-required'
        }
      }));
    });
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    KeycloakAngularModule,
    importProvidersFrom(KeycloakAngularModule),
    EnvConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeEnvConfigAndKeycloak,
      multi: true,
      deps: [KeycloakService, EnvConfigService]
    }
  ]
};
