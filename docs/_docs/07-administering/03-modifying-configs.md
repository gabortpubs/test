---
title: "Modifying configuration settings"
permalink: /docs/administering/modifying-configs/
excerpt: "Modify your Kafka broker configuration settings dynamically using a ConfigMap."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

You can use a ConfigMap to install {{site.data.reuse.long_name}} with a custom set of Kafka configurations.

You can use the {{site.data.reuse.long_name}} CLI to modify the brokers and cluster-wide configuration for your {{site.data.reuse.long_name}} instance dynamically.

You can also use the {{site.data.reuse.long_name}} CLI to modify read-only configuration settings.

## Configurations to set

For a list of all configuration settings you can specify for Kafka brokers, see [the Kafka documentation](http://kafka.apache.org/documentation.html#brokerconfigs).

Some of the broker configuration settings can be updated without restarting the broker, while others require a restart:
* `read-only`: Requires a broker restart for the update to take effect.
* `per-broker`: Can be updated dynamically for each broker without a broker restart.
* `cluster-wide`: Can be updated dynamically as a cluster-wide default, or as a per-broker value for testing purposes.

See the [Dynamic Update Mode](http://kafka.apache.org/documentation.html#brokerconfigs) column in the Kafka documentation for the update mode of each broker configuration.

**Note:** You cannot modfiy the following properties.
* `broker.id`
* `listeners`
* `zookeeper.connect`
* `advertised.listeners`
* `inter.broker.listener.name`
* `listener.security.protocol.map`
* `authorizer.class.name`
* `principal.builder.class`
* `sasl.enabled.mechanisms`
* `log.dirs`

## Setting during installation

To specify broker configuration settings when installing {{site.data.reuse.long_name}}, create a ConfigMap to use with the installation and provide the ConfigMap name to the installation process.

1. {{site.data.reuse.icp_cli_login}}
2. To create a ConfigMap by using an existing Kafka `server.properties` file, use the following command:<br />`kubectl -n <namespace_name>
create configmap <configmap_name>
--from-env-file=<full_path/server.properties>
`<br />You can also create a blank ConfigMap for future configuration updates by using the following command:<br />`kubectl -n <namespace_name> create configmap <configmap_name>`
3. When installing {{site.data.reuse.long_name}}, ensure you provide the name of the ConfigMap you created in the **ConfigMap Name** field of the **Kafka broker configuration** section when specifying the [configuration settings](../../installing/configuring/#kafka-broker-configuration) for the deployment. In addition, the ConfigMap must be in the same namespace as where you intend to install the {{site.data.reuse.long_name}} release.

## Modifying post-installation

You can modify per-broker and cluster-wide configuration settings dynamically (without a broker restart) by using the {{site.data.reuse.long_name}} CLI:
1. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
3. To modify a per-broker configuration setting:
4. To modify a cluster-wide configuration setting:

**DRAFT COMMENT:** _Add EXAMPLE how to change configuration for dynamic broker and dynamic cluster-wide (read-only cluster is below, but check if that's accurate)._

You can also update your read-only configuration settings that require a broker restart by using the {{site.data.reuse.long_name}} CLI.

**Note:** Read-only settings require a ConfigMap to be set. If you did not create and specify a ConfigMap during the installation process, you can create a ConfigMap later with the required Kafka configuration settings or create a blank one as described [earlier](#setting-during-installation). You can then make the ConfigMap available to your {{site.data.reuse.long_name}} instance:

`helm upgrade --reuse-values --set kafka.configMapName=<configmap_name> <release_name> <full_path>/ibm-eventstreams-prod`

The ConfigMap is required to apply changes to the read-only Kafka configurations stored in the `server.properties` when you use a command similar to the following:

`cloudctl es cluster-config --config max.message.bytes=2048 --read-only`
