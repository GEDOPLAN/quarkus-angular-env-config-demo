package de.gedoplan.demo;

import org.eclipse.microprofile.config.inject.ConfigProperties;

@ConfigProperties(prefix = "de.gedoplan.quinoaDemo.envConfig")
public class EnvConfig {
    private String keycloakFrontendUrl;
    private String keycloakRealm;
    private String keycloakClient;

    public String getKeycloakFrontendUrl() {
        return keycloakFrontendUrl;
    }

    public String getKeycloakRealm() {
        return keycloakRealm;
    }

    public String getKeycloakClient() {
        return keycloakClient;
    }
}
