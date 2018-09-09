---
title: "Planning for geo-replication"
permalink: /docs/replication/planning/
excerpt: "Plan geo-replication for your clusters."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

Consider the following when planning for geo-replication:
- If you want to use the CLI to set up geo-replicaiton, ensure you have the [{{site.data.reuse.long_name}} CLI installed](../../installing/post-installation/#installing-the-cli).
-	[Prepare your destination cluster](#preparing-destination-clusters) by setting the number of geo-replication worker nodes. This is where you want to copy your selected topics to.
- [Identify the topics](../about/#what-to-replicate) you want to create mirror copies of. This depends on the data stored in the topics, its use, and how critical it is to your operations.
-	Decide whether you want to include message history in the geo-replication, or only copy message data from the time of setting up geo-replication.  By default, the available message history is included in geo-replication. The amount of history is determined by the retention parameters set for the selected topics on the origin cluster.
-	Decide whether the replicated topics on the destination cluster should have the same name as their corresponding topics on the origin cluster, or if a prefix should be added to the topic name. By default, the replicated topics on the destination cluster have the same name.

## Preparing destination clusters

Before you can set up geo-replication and start copying topics, you must configure the number of geo-replication worker nodes in the destination cluster.

The number of worker nodes to run depend on the number of topics you want to geo-replicate, and the throughput of the topics. You can use the same approach to determine the number as used when [setting the number of brokers for your installation](../../installing/planning/#sizing-considerations).

For example, you can create a small number of worker nodes at the time of installation. You can then increase the number later if you find that your geo-replication performance is not able to keep up with making copies of all the selected topics as required. Alternatively, you can start with a high number of worker nodes, and then decrease the number if you find that the nodes are idle.

**Important:** For high availability reasons, ensure you have at least 2 worker nodes in case one of the worker node encounters problems.

You can configure the number of geo-replication worker nodes at the time of installing {{site.data.reuse.long_name}}, or you can modify an existing installation, even if you already have geo-replication set up and running on that installation.

### Configuring a new installation

If you are installing a new {{site.data.reuse.long_name}} instance for use as a destination cluster, you can specify the number of geo-replication worker nodes when configuring the installation.

To configure the number of worker nodes at the time of installation, use the UI or the CLI as follows.

#### Using the UI

You have the option to specify the number of worker nodes during the installation process on the [**Configure** page](../../installing/configuring/). Go to the **Geo-replication** section and specify the numebr of worker nodes in the **Geo-replicator worker nodes** field.

**DRAFY COMMENT:** _Don't have this yet in the configuring topic, add if this is a new section for the configuring page, and add anchor link to that section._

#### Using the CLI

You have the option to specify the number of worker nodes during the installation process by adding the `--set replicator.replicas=<number-of-nodes>` to your helm installation command.

### Configuring an existing installation

If you decide to use an existing {{site.data.reuse.long_name}} instance as a destination cluster, or want to change the number of worker nodes on an existing instance used as a destination cluster for scaling purposes, you can modify the number of nodes by using the UI or CLI as follows.

#### Using the UI

To modify the number of worker nodes by using the UI:
1. {{site.data.reuse.icp_ui_login}} This is where your destination cluster is installed.
2. From the navigation menu, click **Workloads > Helm Releases**.
3. Locate the release name of your existing {{site.data.reuse.long_name}} cluster in the **NAME** column.
4. Go to the **ACTION** column for the row, and click **Menu overflow > Upgrade**.
5. Go to the **Geo-replication** section and modify the **Geo-replicator worker nodes** field to the required number of nodes.
6. Click **Upgrade**.

#### Using the CLI

To modify the number of worker nodes by using the CLI:
1. {{site.data.reuse.icp_cli_login}}
2. Use the folllowing helm command to modify the numnber of nodes: <br /> `helm upgrade --set replicator.replicas=<number-of-nodes> <releasename> <location-of-charts>`  <br /> For example: **DRAFT COMMENT:** _Let's add examples for these steps._
