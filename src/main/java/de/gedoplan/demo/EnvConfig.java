package de.gedoplan.demo;

import org.eclipse.microprofile.config.inject.ConfigProperties;

@ConfigProperties(prefix = "de.gedoplan.quinoaDemo.envConfig")
public class EnvConfig {
    private String runtimeEnvironment;

    public String getRuntimeEnvironment() {
        return runtimeEnvironment;
    }
}
