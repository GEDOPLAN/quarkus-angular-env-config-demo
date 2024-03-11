import { Injectable } from '@angular/core';
import {EnvConfig} from "./env-config.interface";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable()
export class EnvConfigService {
  private config!: Promise<EnvConfig>;
  constructor(private http: HttpClient) {}
  loadConfig(): void {
    this.config = firstValueFrom(this.http
      .get<EnvConfig>('/api/envConfig'));
  }

  getConfig(): Promise<EnvConfig> {
    if (!this.config) {
      this.loadConfig();
    }
    return this.config;
  }
}
