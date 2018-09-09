---
title: "Configuring"
permalink: /docs/installing/configuring/
excerpt: "Configure your IBM Event Streams installation."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: true
---

Configure your {{site.data.reuse.long_name}} installation by setting the following parameters as needed.

## Global installation settings

The following table describes the parameters for setting global installation options.

Field  | Description   | Default
--|---|--
**Docker image registry**  | Docker images will be fetched from this registry  |`ibmcom`
**Image pull secret**  | If using a registry that requires authentication, the name of the secret containing credentials  |`None`
**Image pull policy** | Controls when Docker images are fetched from the registry  | `IfNotPresent`


## Kafka broker configuration

The following table describes the options for configuring Kafka brokers.

Field  | Description  | Default
--|---|--
**CPU limit for Kafka brokers**  | The maximum CPU resource that is allowed for each Kafka broker when the broker is heavily loaded expressed in CPU units  |  `1000m`
**Memory limit for Kafka brokers**  | The maximum amount of memory that will be allocated for each Kafka broker when the broker is heavily loaded. The value should be a plain integer using one of these suffixes: Gi, G, Mi, M  | `1Gi`
**CPU request for Kafka brokers**  | The expected CPU resource that will be required for each Kafka broker expressed in CPU units  | `1000m`
**Memory request for Kafka brokers**  | The base amount of memory allocated for each Kafka broker. The value should be a plain integer using one of these suffixes: Gi, G, Mi, M  | `1Gi`
**Kafka brokers**  | Number of brokers in the Kafka cluster  | `3`
**ConfigMap Name**  | Provide the name of a ConfigMap containing Kafka configuration to apply changes to Kafka's server.properties. See [how to create a ConfigMap](../../administering/modifying-clusters/#setting-during-installation) for your installation.  | `None`

## Persistent Storage (Apache Kafka)

The following table describes the options for configuring persistent storage.

Field  | Description  | Default
--|---|--
**Enable persistent storage for Apache Kafka**  | Set whether to store Apache Kafka broker data on Persistent Volumes.  | `Not selected (false)`
**Use dynamic provisioning for Apache Kafka**  | Set whether to use a Storage Class when provisioning Persistent Volumes for Apache Kafka. Selecting will dynamically create Persistent Volume Claims for the Kafka brokers. | `Not selected (false)`
**Name**  | Prefix for the name of the Persistent Volume Claims used for the Apache Kafka brokers. | `datadir`
**Storage Class name**  | Storage Class to use for Kafka brokers if dynamically provisioning Persistent Volume Claims.  | `None`
**Size**  | Size to use for the Persistent Volume Claims created for Kafka nodes.  | `4Gi`

## ZooKeeper settings

The following table describes the options for configuring ZooKeeper.

Field  | Description  | Default
--|---|--
**CPU limit for ZooKeeper servers**   | The maximum CPU resource that is allowed for each ZooKeeper server when the server is heavily loaded, expressed in CPU units.  | `100m`
**CPU request for ZooKeeper servers**  | The expected CPU resource that will be required for each ZooKeeeper server, expressed in CPU units.  | `100m`
**Enable persistent storage for ZooKeeper servers**  | Set whether to store Apache ZooKeeper data on Persistent Volumes.  | `Not selected (false)`
**Use dynamic provisioning for ZooKeeper servers**  | Set whether to use a Storage Class when provisioning Persistent Volumes for Apache ZooKeeper. Selecting will dynamically create Persistent Volume Claims for the ZooKeeper servers. | `Not selected (false)`
**Name**  | Prefix for the name of the Persistent Volume Claims used for Apache ZooKeeper.  | `datadir`
**Storage Class name**  | Storage Class to use for Apache ZooKeeper if dynamically provisioning Persistent Volume Claims.  | `None`
**Size**  | Size to use for the Persistent Volume Claims created for Apache ZooKeeper.  | `2Gi`

## Kafka external access configuration

The following table describes the options for configuring external access to Kafka.

Field  | Description  | Default
--|---|--
**Enable external access**  | Set whether to allow external access to Kafka from outside the Kubernetes cluster.  | `Not selected (false)`
**Secure Connections Only** | Set whether to enforce all external connections to be secured with TLS 1.2.   | `Not selected (false)`
**External Hostname/IP address**  | The external hostname or IP address of the master node. This is where external clients can connect to through node ports.   | `None`

## Secure connections

The following table describes the options for configuring secure connections.

Field  | Description  | Default
--|---|--
**Certificate type**  | Select whether you want to have a self-signed certificate generated during installation, or if you will provide your own certificate details. | `selfsigned`
**Private key**  | If you set **Certificate type** to `provided`, this is the Base64 encoded TLS key or private key.  | `None`
**TLS certificate**  | If you set **Certificate type** to `provided`, this is the Base64 encoded TLS certificate or public key certificate.  | `None`
**CA certificate**  | If you set **Certificate type** to `provided`, this is the Base64 encoded TLS cacert or Certificate Authority Root Certificate.  | `None`


## Message indexing configuration

The following table describes the options for configuring message indexing.

Field  | Description  | Default
--|---|--
**Indexing enabled**  | Set whether to enable message indexing, which helps improve message viewing performance. | `Not selected (false)`
**Indexing limits**  | Specify a Kubernetes memory limit for indexing.  | `2Gi`
