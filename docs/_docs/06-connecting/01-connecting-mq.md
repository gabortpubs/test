---
title: "Connecting to IBM MQ"
permalink: /docs/connecting/mq/
excerpt: "Connecting to MQ."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

You can use the {{site.data.reuse.kafka-connect-mq-source}} to copy data from IBM MQ into IBM Event Streams or Apache Kafka. The connector copies messages from a source MQ queue to a target Kafka topic.

Follow these instructions to set up IBM MQ and Apache Kafka from scratch, and use the connector to transfer messages from IBM MQ to Kafka.

## When to use

Many organizations use both IBM MQ and Apache Kafka for their messaging needs. Although they're often used to solve different kinds of messaging problems, users often want to connect them together for various reasons. **DRAFT COMMENT**: _Can we provide an example or two of why they would do this? Just in a sentence._

The {{site.data.reuse.kafka-connect-mq-source}} is used to take messages from an MQ queue and transfer them to a Kafka topic.

### About Kafka Connect

When connecting Apache Kafka and other systems, the technology of choice is the [Kafka Connect framework](https://kafka.apache.org/documentation/#connect).

Kafka Connect connectors run inside a Java process called a worker. Kafka Connect can run in either standalone or distributed mode. Standalone mode is intended for testing and temporary connections between systems. Distributed mode is more appropriate for production use. These instructions are for standalone mode for ease of understanding.

When you run Kafka Connect with a standalone worker, there are two configuration files:
* The worker configuration file contains the properties needed to connect to Kafka. This is where you provide the details for connecting to Kafka.
* The connector configuration file contains the properties needed for the connector. This is where you provide the details for connecting to IBM MQ.

The simplest setup is to run only one connector in each standalone worker. Kafka Connect workers create a lot of messages and it's simpler to read them if the messages from multiple connectors are not interleaved.

## Prerequisites

The connector runs inside the Kafka Connect runtime, which is part of the Apache Kafka distribution. IBM Event Streams does not run connectors, so you need an Apache Kafka distribution to get the Kafka Connect runtime environment.

Ensure you have the following available:

- [IBM MQ](https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_8.0.0/com.ibm.mq.helphome.v80.doc/WelcomePagev8r0.htm) v8 or later installed. **Note:** These instructions are for IBM MQ v9 running on Linux>. If you're using a different version or platform, you might have to adjust some steps slightly.
- An [Apache Kafka](http://kafka.apache.org/downloads) distribution for the Kafka Connect runtime environment. These instructions are for Apache Kafka 0.10.2.0 or later.
- The Kafka Connect source connector JAR you [download from IBM Event Streams UI](#downloading).
- Configuration information for connecting to your IBM MQ queue manager. You can use the sample connector properties file that you [download from the IBM Event Streams UI](#downloading).
- Configuration information for connecting to your IBM Event Streams or Apache Kafka cluster (IP address and port).

## Downloading

You can obtain the {{site.data.reuse.kafka-connect-mq-source}} as follows:
1. Log in to your {{site.data.reuse.long_name}} UI.
2. Click the **Toolbox** tab, and click **{{site.data.reuse.kafka-connect-mq-source}}**.
3. Download both the `connector JAR` and the `sample connector properties` files from the page.

Alternatively, you can clone the project from Github by going to [this repository](https://github.com/ibm-messaging/kafka-connect-mq-source), but in this case you will have to build the connector yourself (see instructions in README).

## Setting up the queue manager

These sample instructions set up a queue manager in IBM MQ that uses the local operating system to authenticate the user ID and password. The example uses the user ID `alice` and the password `passw0rd`.

1. Log in to IBM MQ as and administrator, and ensure the MQ commands are on the path.
2. Create a queue manager with a TCP/IP listener on port 1414: <br /> `crtmqm -p 1414 MYQM`
3. Start the queue manager: <br /> `strmqm MYQM`
4. Start the `runmqsc` tool to configure the queue manager: <br /> `runmqsc MYQM`
5. In `runmqsc`, create a server-connection channel: <br /> `DEFINE CHANNEL(MYSVRCONN) CHLTYPE(SVRCONN)`
6. Set the channel authentication rules to accept connections requiring userid and password: <br />
```sh
SET CHLAUTH(MYSVRCONN) TYPE(BLOCKUSER) USERLIST('nobody')
SET CHLAUTH('*') TYPE(ADDRESSMAP) ADDRESS('*') USERSRC(NOACCESS)
SET CHLAUTH(MYSVRCONN) TYPE(ADDRESSMAP) ADDRESS('*') USERSRC(CHANNEL) CHCKCLNT(REQUIRED)
```
7. Set the identity of the client connections based on the supplied context (the user ID): <br /> `ALTER AUTHINFO(SYSTEM.DEFAULT.AUTHINFO.IDPWOS) AUTHTYPE(IDPWOS) ADOPTCTX(YES)`
8. Refresh the connection authentication information: <br /> `REFRESH SECURITY TYPE(CONNAUTH)`
9. Create a pair of queues for the Kafka Connect connectors to use: <br />
```sh
DEFINE QLOCAL(MYQSOURCE)
DEFINE QLOCAL(MYQSINK)
```
10. Authorize the user ID `alice` to connect to and inquire the queue manager: <br /> `SET AUTHREC OBJTYPE(QMGR) PRINCIPAL('alice') AUTHADD(CONNECT,INQ)`
11. Authorize the user ID `alice` to use the queues: <br />
```sh
SET AUTHREC PROFILE(MYQSOURCE) OBJTYPE(QUEUE) PRINCIPAL('alice') AUTHADD(ALLMQI)
SET AUTHREC PROFILE(MYQSINK) OBJTYPE(QUEUE) PRINCIPAL('alice') AUTHADD(ALLMQI)
```
12. Stop `runmqsc` tool by typing `END`.

The queue manager is now ready to accept connection from Kafka Connect connectors.

## Setting up Apache Kafka

If you do not already have Apache Kafka, you can download it from [here](http://kafka.apache.org/downloads). Ensure you have the prerequisites installed, such as Java.

Download the latest `.tgz` file (for example, `kafka_2.11-1.0.0.tgz`) and extract it. The top-level directory of the extracted `.tgz` file is the Kafka root directory. It contains several directories including `/bin` for the Kafka executables and `/config` for the configuration files.

To run a minimal Kafka cluster, you need to start up several components.

**Tip:** For clarity, run each component in a separate terminal window, starting each in the Kafka root directory.

1. Open a terminal window and change to the Kafka root directory. Start a ZooKeeper server: <br /> `bin/zookeeper-server-start.sh config/zookeeper.properties` <br /> When the ZooKeeper server is up and running, it prints a message similar to the following: <br /> `INFO binding to port 0.0.0.0/0.0.0.0:2181`
2. Open another terminal and start a Kafka server: <br /> `bin/kafka-server-start.sh config/server.properties` <br /> When the Kafka server is up and running, it prints a message similar to the following: <br /> `INFO [KafkaServer id=0] started`
3. Now create a topic called `TSOURCE`: <br /> `bin/kafka-topics.sh --zookeeper localhost:2181  --create --topic TSOURCE --partitions 1 --replication-factor 1`
4. To check what topics exist, use the following command: <br /> `bin/kafka-topics.sh --zookeeper localhost:2181 --describe`

You now have a basic Kafka cluster setup consisting of a single node with the following configuration:
* Kafka bootstrap server: `localhost:9092`
* ZooKeeper server: `localhost:2181`
* Topic name: `TSOURCE`

**NOTE:** This configuration of Kafka writes its data in `/tmp/kafka-logs`, while ZooKeeper uses `/tmp/zookeeper`, and Kafka Connect uses `/tmp/connect.offsets`. To ensure these directories are not being used, clear them out before using Apache Kafka.

## Configuring the connector

The connector requires details to connect to IBM MQ and to your IBM Event Streams or Apache Kafka cluster.

To provide connection details for IBM MQ, use the sample connector properties file you downloaded (`mq-source.properties`). Create a copy of it and save it to the location where you have the connector JAR file.

The connector connects to IBM MQ using a client connection. You must provide the following connection information for your queue manager:
* The name of the IBM MQ queue manager.
* The connection name (one or more host and port pairs).
* The channel name.
* The name of the source IBM MQ queue.
* The user name and password if the queue manager is configured to require them for client connections.
* The name of the target Kafka topic.

For example, the following are required configuration details:
```
mq.queue.manager=MYQM
mq.connection.name.list=localhost(1414)
mq.channel.name=MYSVRCONN
mq.queue=MYQSOURCE
mq.user.name=alice
mq.password=passw0rd
topic=TSOURCE
```

See the sample properties file for a full list of properties you can configure, and also see the [configuration reference](../mq-source-reference/).

To provide the connection details for your Kafka cluster, the Kafka distribution includes a file called `connect-standalone.properties` that you can edit to provide the details. Specify the following connection information:
* A list of one or more servers for bootstrapping connections.
* Whether the cluster requires connections to use SSL/TLS.
* Authentication credentials if the cluster requires clients to authenticate.

**DRAFT COMMENT:** _This is not entirely clear to me, is this accurate Andrew? Also, how do you do this: "You will also need to run the Kafka Connect worker."_

**Note:** You can use an existing IBM MQ or Kafka installation, either locally or on the cloud. For performance reasons, it is recommended to run the Kafka Connect worker close to the queue manager to minimise the effect of network latency. For example, if you have a queue manager in your datacenter and Kafka in the cloud, it's best to run the Kafka Connect worker in your datacenter. <br /> To use an existing queue manager, provide its configuration information in the connector properties file following the previous example.

**Tip:** Alternatively, IBM Message Hub is a fully managed cloud deployment of Apache Kafka running in IBM Cloud. In this case, the cluster is running in IBM Cloud but you will still need to run the Kafka Connect worker. If the queue manager is also in the cloud, you could also run the worker in the cloud. If the network latency between the queue manager and Kafka is high, you should run the worker near the queue manager. For information about how to configure Kafka Connect to work with IBM Message Hub read [this](https://console.bluemix.net/docs/services/MessageHub/messagehub113.html#kafka_connect).

## Running the connector

1. Open a terminal window and change to the Kafka root directory. Start the connector worker as follows: <br /> `CLASSPATH=<path-to-connector-root-directory>/target/kafka-connect-mq-source-0.6-SNAPSHOT-jar-with-dependencies.jar bin/connect-standalone.sh config/connect-standalone.properties ~/mq-source.properties` <br /> **DRAFT COMMENT:** _If you download and thus do not need to build the JAR, would it still need to be in a /target directory?_
<br />
When the connector worker starts, the following message is displayed: <br /> `INFO Created connector mq-source` <br />
When the connector worker successfully connects to IBM MQ, the following message is displayed: <br />
`INFO Connection to MQ established`
2. Open another terminal window and use the Kafka console consumer command to start consuming messages from your topic, and print them to the console: <br /> `bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic TSOURCE`
3. To add messages to the IBM MQ queue, run the `amqsput` sample and type in some messages: <br /> `/opt/mqm/samp/bin/amqsput MYQSOURCE MYQM`

The messages are printed by the Kafka console consumer, and are transferred from the IBM MQ queue `MYQSOURCE` into the Kafka topic `TSOURCE` using the `MYQM` queue manager.

## Stopping Apache Kafka

When you completed testing the connector, stop Apache Kafka as follows:

1. Stop any Kafka Connect workers, console producers, and consumers that are running. **DRAFT COMMENT:** _Should we tell them how?_
2. Change to the Kafka root directory and stop Kafka: <br /> `bin/kafka-server-stop.sh`
3. Stop ZooKeeper: <br /> `bin/zookeeper-server-stop.sh`
