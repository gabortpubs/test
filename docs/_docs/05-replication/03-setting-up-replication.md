---
title: "Setting up geo-replication"
permalink: /docs/replication/setting-up/
excerpt: "Set up geo-replication for your clusters."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

You can set up geo-replication using the {{site.data.reuse.long_name}} UI or CLI. You can then switch your applications to use another cluster when needed.

Ensure you [plan for geo-replication](../planning/) before setting it up.

## Defining destination clusters

To be able to replicate topics, you must define destination clusters. The process involves logging in to your intended destination cluster and copying its connection details to the clipboard. You then log in to the origin cluster and use the connection details to point to the intended destination cluster and define it as a possible target for your replication.

### Using the UI

1. Log in to your destination {{site.data.reuse.long_name}} cluster as an administrator.
2. Click the **Topics** tab and then click **Geo-replication**.
3. In the **This cluster as a destination** section, click **Generate connection information**.
4. Click **Copy connection information** to copy the connection details to the clipboard. This information is what you need to specify the cluster as a destination for replication when you log in to your origin cluster.
5. Log in to your origin {{site.data.reuse.long_name}} cluster as an administrator.
6. Click the **Topics** tab and then click **Geo-replication**.
7. Click **Add destination cluster**.
8. Paste the information you copied in step 4, and click **Add destination**. The cluster is added as a destination to where you can replicate topics to.

### Using the CLI

1. Go to your destination cluster. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init` <br /> The result includes the **Event Streams API endpoint** value. Copy the displayed value to the clipboard.
3. Go to your origin cluster. {{site.data.reuse.icp_cli_login}}
4. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
5. Run the following command to add the cluster as a destination to where you can replicate your topics to: `cloudctl es geo-replicator-create --rest-api-url <endpoint-value-from-step-3>`

## Specifying what and where to replicate

To select the topics you want to replicate and set the destination cluster to replicate to, use the following steps.

### Using the UI

1. Log in to your origin {{site.data.reuse.long_name}} cluster as an administrator.
2. Click the **Topics** tab and then click **Geo-replication**.
3. Choose a destination cluster to replicate to by selecting the name of the cluster from the list on the right.
4. Choose the topics you want to replicate by selecting the check box next each, and click **Geo-replicate to selected destination**. You can also drag topics to add them to be replicated.
5. Optional: Select whether to add a prefix to the name of the new replicated topic that is created on the destination cluster. Set **No prefix added to destination topics** or set **Cluster name added as topic prefix**.
6. Optional: Select whether you want to include message history in the replication, or if you only want to copy the message data from the time of setting up replication. Set **Include message history in replication** or set **Don't include message history in replication**.
7. Click **Create** to create geo-replicators for the selected topics on the chosen destination cluster. Geo-replication starts automatically when the geo-replicators for the selected topics are set up successfully.

### Using the CLI

To set up replication by using the CLI:

1. Go to your origin cluster. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
3. Choose a destination cluster to replicate to by listing all available destination clusters, making the ID of the clusters available to select and copy: `cloudctl es geo-clusters`
4. Open a new terminal window. Choose the topics you want to replicate by listing your topics, making the names of the topics available to select and copy: `cloudctl es topics`
5. Open a new terminal window. Specify the destination cluster to replicate to, and set the topics you want to replicate. Use the required destination cluster ID and topic names retrieved in the previous steps. The command creates one replicator for each topic, so list each topic you want to replicate using a comma-separated list: <br /> `cloudctl es geo-replicator-create --destination <cluster-ID-from-step-3> --topics <comma-separated-list-of-topic-names-from-step-4>` <br /> Geo-replication starts automatically when the geo-replicators for the selected topics are set up successfully.
6. Optional: You can specify to add a prefix to the name of the new replicated topic that is created on the destination cluster by using the `--prefix <prefix-name>` option.
7. Optional: Select whether you want to include message history in the replication, or if you only want to copy the message data from the time of setting up replication. Set one of the following:
    * Use the `--from earliest` option to include available message history in geo-replication. This means all available message data for the topic is copied.
    * Use the `--from latest` option to exclude available message history. This means that only message data from the time of setting up replication is copied.

    For example, to use all options to create the geo-replicators: <br /> `cloudctl es geo-replicator-create --destination <cluster-ID-from-step-3> --topics <comma-separated-list-of-topic-names-from-step-4> --from <earliest or latest> --prefix <topic-name-prefix>` <br /> For example: <br /> `cloudctl es geo-replicator-create --destination DestinationClusterId --topics MyTopicName1,MyTopicName2 --from latest --prefix GeoReplica-`

When your geo-replication is set up, you can [monitor and manage it](../health).

## Switching clusters

When one of your/primary ? IBM Event Stream cluster experiences problems and goes down, you are notified that your workload is switching to a backup/another ? cluster. To switch your applications over to use the backup/another cluster, follow these steps.

**DRAFT COMMENT:** _CLI command will be along the lines of:_ `cloudctl es group-reset` <br /> _Will not be available to switch from the UI_

**DRAFT COMMENT/To-do:** _Add info about how to do this. Also include some notes on strategies_
_Not easy, as we make the replication work, but you do have to take manual steps to switch over to use replicated topics on another cluster. This means changes to your applications - the user will need to do this and depends on their setup and strategy:_ <br />
_For example, users might be running a set of applicaitons that are the backup for primary applications. The setup might mean they have a mechanism for taking over from the primary location. OR You might need to change your application code to use a different cluster when needed. Talk to Andrew._
