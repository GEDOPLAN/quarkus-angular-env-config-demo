import {Component, OnInit} from '@angular/core';
import {EnvConfig} from "../env-config/env-config.interface";
import {HttpClient} from "@angular/common/http";
import {EnvConfigService} from "../env-config/env-config.service";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  envConfig = {
    keycloakFrontendUrl: '',
    keycloakRealm: '',
    keycloakClient: ''
  } as EnvConfig;

  constructor(private envConfigService: EnvConfigService) { }

  ngOnInit(): void {
    this.envConfigService.getConfig().then(data => this.envConfig = data)
  }
}
