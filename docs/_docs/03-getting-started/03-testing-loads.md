---
title: "Creating and testing message loads "
permalink: /docs/getting-started/testing-loads/
excerpt: "."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

{{site.data.reuse.long_name}} provides a high-throughput producer application to test message loads and help validate the performance capabilities of your  cluster.

You can use a predefined load size from the templates provided, or you can specify your own settings to test throughput. Then use the test results to ensure your cluster setup is appropriate for your requirements, or make changes as needed, for example, by changing your [scaling settings](../../administering/scaling/).

## Obtaining

To download and install the application:

**DRAFT COMMENT:** _4 Sept: This will change soon._

1. {{site.data.reuse.maven_prereq}}
2. Go to the following Git project and [clone it](https://github.ibm.com/Andrew-Dunnings1/es-producer). <br />**DRAFT:** _Update to public link when before GA!_
3. Open a terminal and change to the root directory.
4. Run the following command: `mvn install`. <br />You can also specify your root directory using the `-f` option as follows `mvn install -f <path_to>/pom.xml`
5. The `producer.jar` file is created in the `/target` directory.

## Using

Create a load on your {{site.data.reuse.long_name}} Kafka cluster by running the `producer.jar` command. You can specify the load size based on the provided templates, or you can provide specific values for throughput and total messages to determine a custom load.

The following table lists the parameter options for the `producer.jar` command.

| Option             | Parameter | Description                              | Default        |
| --------------------- | -------- |---------------------------------------- | -------------- |
| `-a`     | Bootstrap Address | The addresses of your Kafka servers in the format `<IP_address:port_number>`. You can provide more than one address by adding them in a comma-separated list without any spaces.                 | `localhost:9092` |
| `-t`                 | Topic | The name of the topic to send the produced message load to.      | `loadtest`       |
| `-s`                  | Size | The load size you want to use for the test by using one of the templates provided - see the following table.   | `medium`         |
| `-n`           | Num Records | The total number of messages to be sent as part of the load. If used, this option overrides the template load setting specified by the `size` option.     | `None`           |
| `-m`   | Messages per Second | The number of messages to be sent per second as part of the load. If used, this option overrides the template load setting specified by the `size` option.         | `None`         |
| `-r`           | Record Size | The size of records to be sent in bytes. If used, this option overrides the template load setting specified by the `size` option. | `100` |

### Using with templates

For example, to use a load size from an {{site.data.reuse.long_name}} template, use the `producer.jar` command as follows:

`java -jar target/producer.jar -a localhost:9092 -t loadtest -s large`

This example creates a `large` message load based on the provided template (see the following table), and attempts to send the total number of messages to the topic called `loadtest` registered on the `localhost:9092` cluster.

The following table lists the template load sizes:

Size  | Messages per second  | Total messages
--|---|--
`small`  | 1000  | 60,000
`medium`  | 10,000  | 600,000
`large`  | 100,000  | 6,000,000

### Using with user-defined values

For example, to test the load with your settings by defining the total number of messages and messages per second parameters, use the `producer.jar` command as follows:

`java -jar target/producer.jar -a localhost:9092 -t loadtest -n 60000000 -m 1000000 -r 1000`

This example creates a message load consisting of 60,000,000 messages with a size of 1000 bytes each, and attempts to send 1,000,000 of such messages per second to the topic called `loadtest` registered on the `localhost:9092` cluster.

**Note:** You can override the parameter values by using the environment variables listed in the following table. This is useful, for example, when using containerization, and you are unable to specify parameters on the command line.

| Parameter             | Environment Variable |
| --------------------- | -------------------- |
| Bootstrap Address     | `ES_BOOTSTRAP_ADDRESS` |
| Topic                 | `ES_TOPIC` |
| Size                  | `ES_SIZE` |
| Num Records           | `ES_NUM_RECORDS` |
| Messages per Second   | `ES_THROUGHPUT` |
| Record Size           | `ES_RECORD_SIZE` |
