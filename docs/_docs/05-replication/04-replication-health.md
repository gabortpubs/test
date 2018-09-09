---
title: "Monitoring and managing geo-replication"
permalink: /docs/replication/health/
excerpt: "Check the status of your geo-replication."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---
When you have geo-replication set up, you can monitor and manage your geo-replication, such as checking the status of your geo-replicators, pausing and resuming the copying of data for each topic, removing replicated topics from destination clusters, and so on.

## From a destination cluster

You can check the status of your geo-replication on your destination cluster, and pause, resume, or restart geo-replicators.

You can view the following information for geo-replication on a destination cluster:

* The total number of origin clusters that have topics being replicated to the destination cluster you are logged into.
* The total number of topics being geo-replicated to the destination cluster you are logged into.
* Information about each origin cluster that has geo-replication set up on the destination cluster you are logged into:
    - The cluster name that includes the helm release name and the namespace used.
    - The health of the geo-replication for that origin cluster (**OFFLINE** or **PAUSED**).
    - Number of topics replicated from each origin cluster.

**Tip:** As your cluster can be used as a destination for more than one origin cluster and their replicated topics, this information is useful to understand the status of all geo-replication running on the cluster.

### Using the UI

To view this information by using the UI:
1. Log in to your destination {{site.data.reuse.long_name}} cluster as an administrator.
2. Click the **Topics** tab and then click **Geo-replication**.
3. See the side panel for the previously mentioned information.

To pause, resume, or restart geo-replication on the destination cluster by using the UI:
1. Log in to your destination {{site.data.reuse.long_name}} cluster as an administrator.
2. Click the **Topics** tab and then click **Geo-replication**.
3. Locate the name of the origin cluster for which you want to manage geo-replication, and click one of the following in its row:
    - **Menu overflow > Pause replication**: To pause all geo-replication and suspend copying of data from the origin cluster.
    - **Menu overflow > Resume replication**: To resume all geo-replication from their origin cluster.
    - **Menu overflow > Restart failed replication**: To restart geo-replication from the origin cluster that experienced problems.

### Using the CLI

To view this information by using the CLI:
1. Go to your destination cluster. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
3. **DRAFT COMMENT:** _Add command options when avaialble._ <br />`cloudctl es geo-cluster -i <destination-cluster-id>`<br/>
For example:  <br/>
`cloudctl es geo-cluster -i ClusterB`

To pause, resume, or restart by using the CLI:
1. Go to your destination cluster. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
3. **DRAFT COMMENT:** _Add command options when avaialble._


## From an origin cluster

On the origin cluster, you can check the status of all of your destination cluster locations, and drill down into more detail about each destination.

You can also pause, resume, and remove geo-replicators, and remove entire destination clusters as a target for replication. You can also add topics to geo-replicate.

You can view the following high-level information for geo-replication on an origin cluster:

* The name of each destination cluster.
* The total number of topics being geo-replicated to all destination clusters from the origin cluster you are logged into.
* The total number of working geo-replicator nodes running geo-replication for the origin cluster you are logged into.

You can view more detailed information about each destination cluster after they are set up and running:

* The topics that are being geo-replicated to the destination cluster.
* The health of the geo-replication on each destination cluster (**Running**, **Error**, **Creating replicator**, or **Resume replicator**). When the status is **Error**, the cause of the problem is also provided to aid resolution.

### Using the UI

To view this information by using the UI:
1. Log in to your destination {{site.data.reuse.long_name}} cluster as an administrator.
2. Click the **Topics** tab and then click **Geo-replication**.
3. See the section **Destination locations**.

To manage geo-replication on the origin cluster by using the UI:
1. Log in to your destination {{site.data.reuse.long_name}} cluster as an administrator.
2. Click the **Topics** tab and then click **Geo-replication**.
3. Locate the name of the destination cluster for which you want to manage geo-replication, and click one of the following in its row:
    - **Menu overflow > Pause replication**: To pause all geo-replication and suspend copying of data to the destination cluster.
    - **Menu overflow > Resume replication**: To resume all geo-replication to the destination cluster.
    - **Menu overflow > Remove replication**: To remove geo-replication from the destination cluster.

**DRAFT COMMENT:** _How do you Pause all geo-replicators, Resume all geo-replicators, Remove the whole cluster as destination, and Add topics to geo-replicate?_

### Using the ClI

To view this information by using the CLI:
1. Go to your origin cluster. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
3. **DRAFT COMMENT:** _Add command options when avaialble._ <br />`cloudctl es geo-cluster -i <destination-cluster-id>`<br/>
For example:  <br/>
`cloudctl es geo-cluster -i ClusterB`

To manage geo-replication on the origin cluster by using the CLI:
1. Go to your origin cluster. {{site.data.reuse.icp_cli_login}}
2. Run the following command to start the {{site.data.reuse.long_name}} CLI: `cloudctl es init`
3. **DRAFT COMMENT:** _Add command options when avaialble._
