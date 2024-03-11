# Build Once, Deploy Everywhere: Umgebungsvariablen im Angular-Frontend

Beispielprojekt einer Webanwendung mit Quarkus-Backend und Angular-Frontend, dass über Umgebungsvariablen zur Laufzeit konfiguriert werden kann.

Auf dem keycloak Branch befindet sich ein erweitertes Beispiel, dass über Umgebungsvariablen eine Keycloak-Authentifizierung konfiguriert.

## Quarkus Dev Modus

```shell script
DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_RUNTIMEENVIRONMENT=<env-name> \
./mvnw quarkus:dev
```

## .jar ausführen

```shell script
DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_RUNTIMEENVIRONMENT=<env-name> \
java -jar target/quarkus-app/quarkus-run.jar
```

## Docker

Docker Image bauen:

```shell script
docker build -f src/main/docker/Dockerfile.jvm -t quinoa-demo .
```

Docker Container starten:

```shell script
docker run -p 8080:8080 \
-e DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_RUNTIMEENVIRONMENT=<env-name> \
quinoa-demo
```