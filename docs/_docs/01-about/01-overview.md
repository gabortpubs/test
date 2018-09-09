---
title: "Introduction"
permalink: /docs/about/overview/
excerpt: "IBM Event Streams is an event-streaming platform based on the open-source Apache Kafka® project."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: false
---

IBM Event Streams is an event-streaming platform based on the open-source Apache Kafka® project. It uses the most recent Kafka 2.0 release and supports the use of all Kafka interfaces.

IBM Event Streams builds upon the IBM Cloud Private platform to deploy Apache Kafka in a resilient and manageable way. It includes a UI design aimed at application developers getting started with Apache Kafka, as well as users operating a production cluster.

IBM Event Streams is available in two editions:
* IBM Event Streams Community Edition is a free version intended for trials and demonstration purposes. It can be installed and used without charge.
* IBM Event Streams is a paid-for version intended for enterprise use, and includes additional features such as geo-replication.

IBM Event Streams features include:

*  Apache Kafka deployment that maximizes the spread of Kafka brokers across the nodes of the IBM Cloud Private cluster. This creates a highly-available configuration making the deployment resilient to many classes of failure with automatic restart of brokers included.
* Health check information and options to resolve issues with your clusters and brokers.
* Geo-replication of your topics between clusters to enable high availability and scalability. <br />**Note:** Geo-replication is only available in IBM Event Streams, not Community Edition.
* UI for browsing messages to help view and filter hundreds of thousands of messages, including options to drill in and see message details from a set time.
* Encrypted communication between internal components and encrypted storage by using features available in IBM Cloud Private.
* Security with authentication and authorization using IBM Cloud Private.
