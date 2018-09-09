---
title: "Planning for installation"
permalink: /docs/installing/planning/
excerpt: "Planning your installation of {{site.data.reuse.long_name}}."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: true
---

Consider the following when planning your installation.

## {{site.data.reuse.ce_long}}

The {{site.data.reuse.ce_long}} is a free version intended for trials and demonstration purposes. It can be installed and used without charge.

You can [install the {{site.data.reuse.ce_short}}](../installing) from the catalog included with {{site.data.reuse.icp}}.

## {{site.data.reuse.long_name}}

{{site.data.reuse.long_name}} is the paid-for version intended for enterprise use, and includes full IBM support and additional features such as geo-replication.

You can [install {{site.data.reuse.long_name}}](../installing) using the image you download from IBM Passport Advantage, and making it available in the IBM Cloud Private catalog.

It also includes entitlement for IBM Cloud Private Foundation which you can also download from IBM Passport Advantage if you do not already have IBM Cloud Private.

## Namespaces

Create namespaces to organize your {{site.data.reuse.long_name}} deployments and control user access to them. In IBM Cloud Private, applicaitons are created under namespaces in the deployed IBM Cloud Private clusters. For more information, see [how to create namespaces](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/user_management/create_project.html). **DRAFT COMMENT:**(CHECK LINK BEFORE RELEASE)

If you choose not to create a namespace, use the `default` namespace instead when performing the installation.

## Persistent storage

**DRAFT COMMENT:** _Review early Sept._

Persistence is not enabled by default, so no persistent volumes are required. If you are not using persistence, you can ignore this section. Enable persistence if you want messages in topics and configuration settings to be retained in the event of a restart.

If persistence is enabled, each Apache Kafka® broker and Apache ZooKeeper™ server requires one Physical Volume. Kafka and ZooKeeper can use different storage classes to control how physical volumes are allocated.

If these Persistent Volumes are to be created manually, this must be done by the system administrator who will add these to a central pool before the Helm chart can be installed. The installation will then claim the required number of Persistent Volumes from this pool. For manual creation, “dynamic provisioning” must be disabled in the Helm chart when it is installed. It is up to the administrator to provide appropriate storage to back these Physical Volumes.

If these Persistent Volumes are to be created automatically at the time of installation, the system administrator must enable support for this prior to installing the Helm chart. For automatic creation “dynamic provisioning” should be enabled in the Helm chart when it is installed and storage class names provided to define which types of Persistent Volume get allocated to the deployment.

More information about Persistent Volumes and the system administration steps required before the Helm chart can be installed can be found in the [Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

To create persistent volumes, see the [IBM Cloud Private topics](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/manage_cluster/create_volume.html).

**DRAFT COMMENT:**_Are the following steps still accurate, or should we just point to ICP docs as above?_

You can enable persistence for Kafka when you install the Helm chart as follows:
1. Locate the section named “Persistent Storage (Apache Kafka)” in the Helm chart configuration settings
2. Check the “Enable persistent storage for Apache Kafka” setting
3. Optionally check the “Use dynamic provisioning for Apache Kafka” setting and provide a storage class name if the Persistent Volumes will be created dynamically

You can enable persistence for ZooKeeper when you install the Helm chart as follows:

1. Locate the section named “ZooKeeper settings” in the Helm chart configuration settings
2. Check the “Enable persistent storage for ZooKeeper servers” setting
3. Optionally check the “Use dynamic provisioning for ZooKeeper servers” setting and provide a storage class name if the Persistent Volumes will be created dynamically


## Connecting external clients

When installing {{site.data.reuse.long_name}}, you have the option to allow external Kafka client applications to connect to the {{site.data.reuse.icp}} cluster. The only exception is the starter application that you generate from the {{site.data.reuse.long_name}} UI.

You can configure [external access](../configuring/#kafka-external-access-configuration) when defining the settings for your installation. When installing by using the UI, you do this after clicking **Configure** for the Helm chart. You then set the **External Hostname/IP address** field in the **Kafka external access configuration** section to the externally visible hostname or IP address of the {{site.data.reuse.icp}} master node.

Also ensure you configure security for your cluster by setting certificate details in the **Secure connections** section. By default, a self-signed certificate is created during installation and the **Private key**, **TLS certificate**, and **CA certificate** fields can be left blank. If you want to use an existing certificate, select **provided** under **Certificate type**, and provide these additional keys and certificate values as base 64-encoded strings.

When installing by using the CLI, add the `proxy.externalEndpoint=<external-ip-address-or-hostname>` value to the Helm install command, and set the values for secure connections. For more information, see the README.

After installation, [enable external access](../post-installation#enabling-external-client-access) by chekcing the port number to use for external connections and ensuring the necessary certificates are configured within your client environment.

## Managing Kafka configurations

You can [use a ConfigMap](../../administering/modifying-configs/) to specify the Kafka broker settings for your {{site.data.reuse.long_name}} installation. You can use the ConfigMap when installing {{site.data.reuse.long_name}}, or you can use it later to modify settings for an existing installation.


## Sizing considerations

**DRAFT COMMENT:** Need to revisit once Event Streams on ICP 3.1 is tested, then decide whether we want to include info in connection with scaling around the number of Kafka brokers needed, and similar info. Can we even provide any guidance here, or would they need to test load and then see scaling topic? Is there a minimum number of Kafka brokers for example? Is there any guidance on how many to use and when? I guess we can reference the [load testing here](../../getting-started/testing-loads/).

Capture questions raised in <https://github.ibm.com/mhub/qp-planning/issues/646>

## Logging

{{site.data.reuse.icp}} uses the ELK stack for managing logs (Elasticsearch, Logstash, and Kibana products). {{site.data.reuse.long_name}} logs are written to `stdout` and are picked up by the default ELK stack setup.

Consider setting up the {{site.data.reuse.icp}} logging for your environment to help resolve problems with your deployment and aid general troubleshooting. See the [{{site.data.reuse.icp}} documentation about logging](https://www.ibm.com/support/knowledgecenter/sv/SSBS6K_2.1.0.3/manage_metrics/logging_elk.html) for information about the the built-in ELK stack.

As part of setting up the {{site.data.reuse.icp}} logging for {{site.data.reuse.long_name}}, ensure you consider the following:
* [Capacity planning guidance](https://www.ibm.com/support/knowledgecenter/SSBS6K_2.1.0.3/manage_metrics/capacity_planning.html): set up your system to have sufficient resources towards the capture, storage, and management of logs.
* [Log retention](https://www.ibm.com/support/knowledgecenter/sv/SSBS6K_2.1.0.3/manage_metrics/logging_elk.html#curator-usage-in-ibm-cloud-private): The logs captured using the ELK stack persist during restarts. However, logs older than a day are deleted at midnight by default to prevent log data from filling up available storage space. Consider changing the log data retention in line with your capacity planning. Longer retention of logs provides access to older data that might help troubleshoot problems.

You can use log data to investigate any problems affecting your [system health](../../administering/cluster-health/).
