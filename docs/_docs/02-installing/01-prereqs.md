---
title: "Pre-requisites"
permalink: /docs/installing/prerequisites/
excerpt: "Pre-requisites for installing IBM Event Streams."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: true
---

Ensure your environment meets the following prerequisites before installing {{site.data.reuse.long_name}} version 2018.3.0.

## {{site.data.reuse.icp}} environment

{{site.data.reuse.long_name}} is supported on {{site.data.reuse.icp}} version 3.1.0 running on Linux® 64-bit (x86_64) systems.

Ensure you have the following set up for your {{site.data.reuse.icp}} environment:
  * Install [{{site.data.reuse.icp}} version 3.1.0](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/installing/installing.html).(CHECK LINK BEFORE RELEASE)<br />**Note:** {{site.data.reuse.long_name}} includes entitlement for {{site.data.reuse.icp_foundation}} which you can [download](../downloading) from IBM Passport Advantage.
  * Install the [Kubernetes command line tool](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/manage_cluster/cfc_cli.html), and configure access to your cluster.(CHECK LINK BEFORE RELEASE)
  * Install the [{{site.data.reuse.icp}} Command Line Interface](https://www.ibm.com/support/knowledgecenter/en/SSBS6K_3.1.0/manage_cluster/install_cli.html).(CHECK LINK BEFORE RELEASE)
  * Install the [Helm Command Line Interface](https://www.ibm.com/support/knowledgecenter/en/SSBS6K_3.1.0/app_center/create_helm_cli.html) version 2.7.3 or later.(CHECK LINK BEFORE RELEASE)
  * For message indexing capabilities, set the `vm.max_map_count` property to at least `262144` on all {{site.data.reuse.icp}} nodes in your cluster (not only the master node). Run the following commands on each node:  <br />
  `sudo sysctl -w vm.max_map_count=262144`<br />
  `echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf` <br />
  During [configuration](../configuring/#message-indexing-configuration), ensure you enable message indexing to improve message viewing performace.

## Hardware requirements

The Helm chart for {{site.data.reuse.long_name}} specifies default values for the CPU and memory usage of the Apache Kafka<sup>®</sup> brokers and Apache ZooKeeper<sup>™</sup> servers. While {{site.data.reuse.long_name}} can run successfully if lower memory and CPU values are specified, these defaults are the minimum values tested.

If a system has, for example, 8 GB of memory available per node, then each Kafka broker’s memory requirement must be set to be less than 8 GB. This allows resources to be available for other {{site.data.reuse.long_name}} components which might be required to reside on the same node.

Ensure you have one {{site.data.reuse.icp}} worker node per Kafka broker, and a minimum of 3 worker nodes available for use by {{site.data.reuse.long_name}}.

## Helm resource requirements

This Helm chart has the following resource requirements:

Component  | Number of replicas  | CPU/pod  | Memory/pod (Gi)
--|---|---|--
Kafka  | 3*  | 1*  | 1*
ZooKeeper  | 3  | 0.1*  | 0.25*
Administration UI  | 1  | 0.1  | 0.25
Administration server  | 1  | 1  | 2
Network proxy  | 1  | unlimited  | unlimited

You can configure the settings marked with an asterisk (*).

The CPU and memory limits for the network proxy are not limited by the chart, so they inherit the resource limits for the namespace that the chart is being installed into. If there are no resource limits set for the namespace, the network proxy pod runs with unbounded CPU and memory limits.

## Network requirements

{{site.data.reuse.long_name}} is supported for use with IPv4 networks only.

## File systems for storage

If [persistent storage](../planning/#persistent-storage) is required, the storage used must be physical volumes backed by file shares running with NFS version 4.

## {{site.data.reuse.long_name}} user interface

The {{site.data.reuse.long_name}} user interface (UI) is supported on the following web browsers:

*   Google Chrome version 65 or later
*   Mozilla Firefox version 59 or later
*   Microsoft Edge version 16 or later
*   Safari version 11.1 or later

## {{site.data.reuse.long_name}} command line interface

The {{site.data.reuse.long_name}} command line interface (CLI) is supported on the following systems:

*   Windows 10 or later
*   Linux® Ubuntu 16.04 or later
*   macOS 10.13 (High Sierra) or later

## Clients

{{site.data.reuse.long_name}} is supported for use with clients running Apache Kafka version 0.11.0.0 or later.

The Kafka Java client shipped with {{site.data.reuse.long_name}} is supported for use with the following Java versions:

*   IBM Java 8
*   Oracle Java 8

## Firewall requirements

**DRAFT COMMENT:** _Talk to Adam Pilkington (back Monday) to have similar info here to_ [link](https://www.ibm.com/support/knowledgecenter/SSURRN/com.ibm.cem.doc/em_firewallreq.html)

or similar [topic:](https://www.ibm.com/support/knowledgecenter/SS8G7U_18.2.0/com.ibm.app.mgmt.doc/content/planning_ports.htm)
