---
title: "Reference for IBM MQ source connector"
permalink: /docs/connecting/mq-source-reference/
excerpt: "Reference material for Kafka Connect source connector for IBM MQ."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

## Data formats

**DRAFT COMMENT:** _See what to add from [here](https://github.com/ibm-messaging/kafka-connect-mq-source#data-formats)._

## Configuration options

The {{site.data.reuse.kafka-connect-mq-source}} includes a connector properties file called `mq-source.properties`. The following table lists the configuration options you can set in the file.

| Name                         | Description                                                 | Type    | Default       | Valid values                                            |
| ---------------------------- | ----------------------------------------------------------- | ------- | ------------- | ------------------------------------------------------- |
| mq.queue.manager             | The name of the MQ queue manager                            | string  |               | MQ queue manager name                                   |
| mq.connection.name.list      | List of connection names for queue manager                  | string  |               | host(port)[,host(port),...]                             |
| mq.channel.name              | The name of the server-connection channel                   | string  |               | MQ channel name                                         |
| mq.queue                     | The name of the source MQ queue                             | string  |               | MQ queue name                                           |
| mq.user.name                 | The user name for authenticating with the queue manager     | string  |               | User name                                               |
| mq.password                  | The password for authenticating with the queue manager      | string  |               | Password                                                |
| mq.record.builder            | The class used to build the Kafka Connect record            | string  |               | Class implementing RecordBuilder                        |
| mq.message.body.jms          | Whether to interpret the message body as a JMS message type | boolean | false         |                                                         |
| mq.record.builder.key.header | The JMS message header to use as the Kafka record key       | string  |               | JMSMessageID, JMSCorrelationID, JMSCorrelationIDAsBytes |
| mq.ssl.cipher.suite          | The name of the cipher suite for TLS (SSL) connection       | string  |               | Blank or valid cipher suite                             |
| mq.ssl.peer.name             | The distinguished name pattern of the TLS (SSL) peer        | string  |               | Blank or DN pattern                                     |
| topic                        | The name of the target Kafka topic                          | string  |               | Topic name                                              |

## Security

The connector supports authentication with user name and password and also connections secured with TLS using a server-side certificate and mutual authentication with client-side certificates.

### Setting up TLS using a server-side certificate

To enable use of TLS, set the configuration `mq.ssl.cipher.suite` to the name of the cipher suite which matches the CipherSpec in the SSLCIPH attribute of the MQ server-connection channel. Use the table of supported cipher suites for MQ 9.0.x [here](https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.dev.doc/q113220_.htm) as a reference. Note that the names of the CipherSpecs as used in the MQ configuration are not necessarily the same as the cipher suite names that the connector uses. The connector uses the JMS interface so it follows the Java conventions.

You will need to put the public part of the queue manager's certificate in the JSSE truststore used by the Kafka Connect worker that you're using to run the connector. If you need to specify extra arguments to the worker's JVM, you can use the EXTRA_ARGS environment variable.

### Setting up TLS for mutual authentication

You will need to put the public part of the client's certificate in the queue manager's key repository. You will also need to configure the worker's JVM with the location and password for the keystore containing the client's certificate.

### Troubleshooting

For troubleshooting, or to better understand the handshake performed by the IBM MQ Java client application in combination with your specific JSSE provider, you can enable debugging by setting `javax.net.debug=ssl` in the JVM environment.
