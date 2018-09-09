var store = [{
        "title": "Introduction",
        "excerpt":"IBM Event Streams is an event-streaming platform based on the open-source Apache Kafka® project. It uses the most recent Kafka 2.0 release and supports the use of all Kafka interfaces. IBM Event Streams builds upon the IBM Cloud Private platform to deploy Apache Kafka in a resilient and manageable way....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/overview/",
        "teaser":null},{
        "title": "Key concepts",
        "excerpt":"Apache Kafka® forms the reliable messaging core of IBM Event Streams. It is a publish-subscribe messaging system designed to be fault-tolerant, providing a high-throughput and low-latency platform for handling real-time data feeds. The following are some key Kafka concepts. Cluster Kafka runs as a cluster of one or more servers....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/key-concepts/",
        "teaser":null},{
        "title": "Producing messages",
        "excerpt":"A producer is an application that publishes streams of messages to Kafka topics. This information focuses on the Java programming interface that is part of the Apache Kafka® project. The concepts apply to other languages too, but the names are sometimes a little different. In the programming interfaces, a message...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/producing-messages/",
        "teaser":null},{
        "title": "Consuming messages",
        "excerpt":"A consumer is an application that consumes streams of messages from Kafka topics. A consumer can subscribe to one or more topics or partitions. This information focuses on the Java programming interface that is part of the Apache Kafka project. The concepts apply to other languages too, but the names...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/consuming-messages/",
        "teaser":null},{
        "title": "Partition leadership",
        "excerpt":"Each partition has one server in the cluster that acts as the partition’s leader and other servers that act as the followers. All produce and consume requests for the partition are handled by the leader. The followers replicate the partition data from the leader with the aim of keeping up...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/partition-leadership/",
        "teaser":null},{
        "title": "Accessibility",
        "excerpt":"Accessibility features assist users who have a disability, such as restricted mobility or limited vision, to use information technology content successfully. Overview IBM Event Streams includes the following major accessibility features: Keyboard-only operation Operations that use a screen readerIBM Event Streams uses the latest W3C Standard, WAI-ARIA 1.0, to ensure...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/accessibility/",
        "teaser":null},{
        "title": "Notices",
        "excerpt":"This information was developed for products and services offered in theUS. This material might be available from IBM in other languages.However, you may be required to own a copy of the product or productversion in that language in order to access it. IBM may not offer the products, services, or...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/about/notices/",
        "teaser":null},{
        "title": "Pre-requisites",
        "excerpt":"Ensure your environment meets the following prerequisites before installing IBM Event Streams version 2018.3.0. IBM Cloud Private environment IBM Event Streams is supported on IBM Cloud Private version 3.1.0 running on Linux® 64-bit (x86_64) systems. Ensure you have the following set up for your IBM Cloud Private environment: Install IBM...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/prerequisites/",
        "teaser":null},{
        "title": "Planning for installation",
        "excerpt":"Consider the following when planning your installation. IBM Event Streams Community Edition The IBM Event Streams Community Edition is a free version intended for trials and demonstration purposes. It can be installed and used without charge. You can install the Community Edition from the catalog included with IBM Cloud Private....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/planning/",
        "teaser":null},{
        "title": "Downloading",
        "excerpt":"Download and extract the IBM Event Streams installation image file from the IBM® Passport Advantage® site before installing it into IBM Cloud Private. Go to IBM® Passport Advantage®, and search for PART NUMBER CNXXXX to locate the IBM Event Streams image &lt;PPA-image-name.tar.gz&gt;. Note: If you do not have IBM Cloud...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/downloading/",
        "teaser":null},{
        "title": "Installing",
        "excerpt":"Install IBM Event Streams as follows. Ensure you have set up your environment according to the prerequisites. Ensure you have planned for your installation, including setting up a namespace. To install IBM Event Streams (not the Community Edition), download it first and make it available in the catalog. If you...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/installing/",
        "teaser":null},{
        "title": "Configuring",
        "excerpt":"Configure your IBM Event Streams installation by setting the following parameters as needed. Global installation settings The following table describes the parameters for setting global installation options. Field Description Default Docker image registry Docker images will be fetched from this registry ibmcom Image pull secret If using a registry that...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/configuring/",
        "teaser":null},{
        "title": "Migrating to IBM Event Streams",
        "excerpt":"You can migrate from the IBM Event Streams Community Edition to IBM Event Streams. Migrating involves removing your previous Community Edition installation and installing IBM Event Streams in the same namespace and using the same release name. Using this procedure, your settings and data are also migrated to the new...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/migrating/",
        "teaser":null},{
        "title": "Post-installation tasks",
        "excerpt":"Consider the following tasks after installing IBM Event Streams. Verifying your installation To verify that your IBM Event Streams installation deployed successfully, check the status of your release as follows. Log in to your IBM Cloud Private cluster management console from a supported web browser by using the URL https://&lt;master-ip&gt;:8443,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/post-installation/",
        "teaser":null},{
        "title": "Uninstalling",
        "excerpt":"You can uninstall IBM Event Streams by using the UI or the CLI. Using the UI To delete the Community Edition installation by using the UI: Log in to the IBM Event Streams UI as an administrator. Click Workloads &gt; Helm Releases from the navigation menu. Locate the release name...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/installing/uninstalling/",
        "teaser":null},{
        "title": "Logging in",
        "excerpt":"Log in to your IBM Event Streams installation. To determine the administrative console URL: Log in to your IBM Cloud Private cluster management console from a supported web browser by using the URL https://&lt;master-ip&gt;:8443, where master_ip is the IP address of the master node for your IBM Cloud Private cluster....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/getting-started/logging-in/",
        "teaser":null},{
        "title": "Generating a starter application",
        "excerpt":"To learn more about how you can create applications that can take advantage of IBM Event Streams capabilities, generate a starter application. The starter application can produce and consume messages, and you can specify the topic where you want to send messages to. To generate the applicaiton: Ensure you have...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/getting-started/generating-starter-app/",
        "teaser":null},{
        "title": "Creating and testing message loads ",
        "excerpt":"IBM Event Streams provides a high-throughput producer application to test message loads and help validate the performance capabilities of your cluster. You can use a predefined load size from the templates provided, or you can specify your own settings to test throughput. Then use the test results to ensure your...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/getting-started/testing-loads/",
        "teaser":null},{
        "title": "Setting up users",
        "excerpt":"Set up user access. DRAFT COMMENT: Talk to Tim and Tony about this, and include Andrew. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/security/users/",
        "teaser":null},{
        "title": "Encrypting your data",
        "excerpt":"By default, data within the IBM Event Streams deployment is not encrypted. To secure this data, you must ensure that any storage and communication channels are encrypted as follows: Encrypt data at rest by encrypting volumes using dm-crypt. Encrypt internal network traffic within the cluster with IPSec. Encrypt messages in...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/security/encrypting-data/",
        "teaser":null},{
        "title": "About geo-replication",
        "excerpt":"You can deploy multiple instances of IBM Event Streams and use the included geo-replication feature to synchronize data between your clusters that are typically located in different geographical locations. The geo-replication feature creates mirror copies of your selected topics. Geo-replication can help with various service availability scenarios, for example: Ensuring...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/replication/about/",
        "teaser":null},{
        "title": "Planning for geo-replication",
        "excerpt":"Consider the following when planning for geo-replication: If you want to use the CLI to set up geo-replicaiton, ensure you have the IBM Event Streams CLI installed. Prepare your destination cluster by setting the number of geo-replication worker nodes. This is where you want to copy your selected topics to....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/replication/planning/",
        "teaser":null},{
        "title": "Setting up geo-replication",
        "excerpt":"You can set up geo-replication using the IBM Event Streams UI or CLI. You can then switch your applications to use another cluster when needed. Ensure you plan for geo-replication before setting it up. Defining destination clusters To be able to replicate topics, you must define destination clusters. The process...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/replication/setting-up/",
        "teaser":null},{
        "title": "Monitoring and managing geo-replication",
        "excerpt":"When you have geo-replication set up, you can monitor and manage your geo-replication, such as checking the status of your geo-replicators, pausing and resuming the copying of data for each topic, removing replicated topics from destination clusters, and so on. From a destination cluster You can check the status of...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/replication/health/",
        "teaser":null},{
        "title": "Connecting to IBM MQ",
        "excerpt":"You can use the Kafka Connect source connector for IBM MQ to copy data from IBM MQ into IBM Event Streams or Apache Kafka. The connector copies messages from a source MQ queue to a target Kafka topic. Follow these instructions to set up IBM MQ and Apache Kafka from...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/connecting/mq/",
        "teaser":null},{
        "title": "Reference for IBM MQ source connector",
        "excerpt":"Data formats DRAFT COMMENT: See what to add from here. Configuration options The Kafka Connect source connector for IBM MQ includes a connector properties file called mq-source.properties. The following table lists the configuration options you can set in the file. Name Description Type Default Valid values mq.queue.manager The name of...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/connecting/mq-source-reference/",
        "teaser":null},{
        "title": "Monitoring deployment health",
        "excerpt":"Understand the health of your IBM Event Streams deployment at a glance, and learn how to find information about problems. Using the UI The IBM Event Streams UI provides information about the health of your environment at a glance. In the bottom right corner of the UI, a message shows...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/administering/deployment-health/",
        "teaser":null},{
        "title": "Monitoring Kafka cluster health",
        "excerpt":"DRAFT COMMENT: Ask Graeme about the Monitor tab in UI - will probably be a separate topic. The Monitor tab is about the health of your Kafka cluster, while the stuff explained here is about the health of your Event Streams installation. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/administering/cluster-health/",
        "teaser":null},{
        "title": "Modifying configuration settings",
        "excerpt":"You can use a ConfigMap to install IBM Event Streams with a custom set of Kafka configurations. You can use the IBM Event Streams CLI to modify the brokers and cluster-wide configuration for your IBM Event Streams instance dynamically. You can also use the IBM Event Streams CLI to modify...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/administering/modifying-configs/",
        "teaser":null},{
        "title": "Scaling",
        "excerpt":"What scaling can be done for IBM Event Streams? Tom said: Do not use kubectl command to scale up or down. kubectl scale --replicas=3 for kafka sts - which would scale the specified pod up to three copies So this cannot be done? https://kubernetes.io/docs/tasks/run-application/scale-stateful-set/ Reference: https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale or this: https://www.ibm.com/support/knowledgecenter/SSBS6K_2.1.0.2/manage_applications/scaling_app.html So...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/administering/scaling/",
        "teaser":null},{
        "title": "Updating dynamically",
        "excerpt":"“Rohan can implement ES updates, such as helm updates, without service interruption.” Event Streams version update. This can be a Fix Pack update or upgrade to the next release. DRAFT COMMENT: Ask later - Emma and Erik looking into it, and this would not be for GA but for post-GA....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/administering/updating-dynamically/",
        "teaser":null},{
        "title": "Troubleshooting",
        "excerpt":"To help troubleshoot issues with your installation, see the troubleshooting topics in this section. In addition, you can check the health information for your environment as described in monitoring deployment health and monitoring Kafka cluster health. ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/troubleshooting/intro/",
        "teaser":null},{
        "title": "UI error on Firefox",
        "excerpt":"You might see the following error code when launching the IBM Event Streams UI in Firefox: SEC_ERROR_REUSED_ISSUER_AND_SERIAL Symptoms You might see the following error either after reinstalling IBM Event Streams, or when two instances of the IBM Event Streams UI are connecting to two different IBM Event Streams installations while...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/mhub/qp-docs/docs/troubleshooting/ui-error-firefox/",
        "teaser":null},]
