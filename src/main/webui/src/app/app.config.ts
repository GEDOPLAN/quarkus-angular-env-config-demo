import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {EnvConfigService} from "./env-config/env-config.service";

export function initializeEnvConfigService(envConfigService: EnvConfigService) {
  return () => envConfigService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    EnvConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeEnvConfigService,
      multi: true,
      deps: [EnvConfigService],
    }
  ]
};
