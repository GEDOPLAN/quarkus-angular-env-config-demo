package de.gedoplan.demo;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.inject.ConfigProperties;

@Path("/envConfig")
public class EnvConfigResource {

    @Inject
    @ConfigProperties
    EnvConfig envConfig;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public EnvConfig getEnvConfig() {
        return envConfig;
    }
}
