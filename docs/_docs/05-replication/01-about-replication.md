---
title: "About geo-replication"
permalink: /docs/replication/about/
excerpt: "Learn about setting up geo-replication for your clusters."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

You can deploy multiple instances of {{site.data.reuse.long_name}} and use the included geo-replication feature to synchronize data between your clusters that are typically located in different geographical locations. The geo-replication feature creates mirror copies of your selected topics.

Geo-replication can help with various service availability scenarios, for example:
* Ensuring high performance across your clusters: you can have multiple {{site.data.reuse.long_name}} deployments with topic data copied to each. This helps prevent the overloading of any single cluster, and improves response times for your applications, and consequently the performance of the services that depend on it.
* Supporting your high availability and disaster recovery plans: you can set up geo-replication to support your high availability and disaster recovery architecture, enabling the switching to other clusters if your primary ones experience a problem.
* Making mission-critical data safe: you might have mission-critical data that your applications depend on to provide services. Using the geo-replication feature, you can back up your topics to several destinations to ensure their safety and availability.
* Migrating data: you can ensure your topic data can be moved to another deployment, for example, when switching from a test to a  production environment.

## How it works

The Kafka cluster where you have the topics that you want to make copies of is called the "origin cluster".

The Kafka cluster where you want to copy the selected topics to is called the "destination cluster".

So, one cluster is the origin where you want to copy the data from, while the other cluster is the destination where you want to copy the data to.

**Important:** If you are using geo-replication for purposes of availability in the event of a data center outage or disaster, you must ensure that the origin cluster and destination cluster are installed on different systems that are isolated from each other. This ensures that any issues with the origin cluster does not affect the destination cluster.

Any of your {{site.data.reuse.long_name}} clusters can become destinations for replication. At the same time, the origin cluster can also be a destination for topics from other sources.

Geo-replication not only creates a mirror copy of the message content within a topic, but also copies the topic configuration, the topic's metadata, its partitions, and even preserves the timestamps from the origin topic.

The topics are kept in sync, so if any change happens on the origin topic, it is copied over to the mirror topic on the destination cluster. For example, if you add a new partition to the origin topic, the replicator adds a partition to the copy of the topic on the destination cluster. This is done to maintain the correct message order on the copy of the topic.

You can set up geo-replication by using the {{site.data.reuse.long_name}} UI or CLI. When replication is set up and working, you can switch to another cluster when needed.

## What to replicate

What topics you choose to replicate and how depend on the topic data, whether it is critical to your operations, and how you want to use it.

For example, you might have transaction data for your customers in topics. Such information is critical to your operations to run reliably, so you want to ensure they have back-up mirror copies to switch to when needed. For such critical data, you might consider setting up several copies to ensure high availability. One way to do this is to set up replication of 5 topics to one destination cluster, and the next 5 to another destination cluster, assuming you have 10 topics to replicate. Alternatively, you can replicate the same topics to two different destination clusters.

Another example would be storing of website analytics information, such as where users clicked and how many times they did so. Such information is likely to be less important than maintaining high availability for your operations, and you might choose not to replicate such topics, or only replicate them to one destination cluster.
