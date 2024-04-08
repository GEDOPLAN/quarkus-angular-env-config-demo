# Build Once, Deploy Everywhere: Umgebungsvariablen im Angular-Frontend

Beispielprojekt einer Webanwendung mit Quarkus-Backend und Angular-Frontend, dass über Umgebungsvariablen zur Laufzeit konfiguriert werden kann.

Auf diesem Branch befindet sich ein Anwendungsbeispiel, dass über Umgebungsvariablen eine Keycloak-Authentifizierung konfiguriert. 

## Quarkus Dev Modus

Im Quarkus Dev Modus wird ein Keycloak Server durch Quarkus verwaltet und konfiguriert.
Der Nutzer quinoa/quinoa ist in der Konfiguration hinterlegt.

```shell script
./mvnw quarkus:dev
```

## .jar ausführen

Die gebaute .jar-Datei kann wie folgt konfiguriert und ausgeführt werden.

```shell script
DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_KEYCLOAKFRONTENDURL=<keycloak-url> \
DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_KEYCLOAKREALM=<realm-name> \
DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_KEYCLOAKCLIENT=<client-id> \
java -jar target/quarkus-app/quarkus-run.jar
```

`<keycloak-url>` sollte auf den Keycloak Server zeigen, der einen Realm unter dem Namen `<realm-name>` und einen Client unter `<client-id>` konfiguriert hat.
Eine Beispielkonfiguration findet sich in [src/main/resources/dev-realm.json](src/main/resources/dev-realm.json).
Ein lokaler konfigurierter Keycloak Server im Docker Container kann z.B. wie folgt gestartet werden (`<path-to-project-root>` durch Pfad zum Projekt ersetzen):

```shell script
docker run -p 8085:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -v <path-to-project>/src/main/resources/dev-realm.json:/opt/keycloak/data/import/dev-realm.json quay.io/keycloak/keycloak:23.0.7 start-dev --import-realm
```

## Docker

Docker Image bauen:

```shell script
docker build -f src/main/docker/Dockerfile.jvm -t quinoa-demo .
```

Docker Container starten:

Wie beim Ausführen der .jar-Datei gilt auch hier:

`<keycloak-url>` sollte auf den Keycloak Server zeigen, der einen Realm unter dem Namen `<realm-name>` und einen Client unter `<client-id>` konfiguriert hat.

```shell script
docker run -p 8080:8080 \
-e DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_KEYCLOAKFRONTENDURL=<keycloak-url> \
-e DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_KEYCLOAKREALM=<realm-name> \
-e DE_GEDOPLAN_QUINOADEMO_ENVCONFIG_KEYCLOAKCLIENT=<client-id> \
quinoa-demo
```

## K8s

In [src/main/k8s/quinoa-demo.yaml](src/main/k8s/quinoa-demo.yaml) ist ein Beispiel für ein Deployment beschrieben.

Die Umgebungsvariablen können in der ConfigMap `quinoa-demo-config` angepasst werden.

Zusätzlich zur `KEYCLOAKFRONTENDURL` Umgebungsvariable kann auch die `KEYCLOAKINTERNALURL` Variable gesetzt werden, falls das Backend zur Kommunikation mit dem Keycloak Server eine andere Adresse nutzt (z.B. Cluster intern).