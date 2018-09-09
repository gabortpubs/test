---
title: "Post-installation tasks"
permalink: /docs/installing/post-installation/
excerpt: "Post-installation tasks after successfully installing IBM Event Streams."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: true
---

Consider the following tasks after installing {{site.data.reuse.long_name}}.

## Verifying your installation

To verify that your {{site.data.reuse.long_name}} installation deployed successfully, check the status of your release as follows.

1. {{site.data.reuse.icp_ui_login}}
2. Enter an {{site.data.reuse.icp}} administrator user name and password.
3. From the navigation menu, click **Workloads > Helm Releases**.
4. Locate your installation in the **NAME** column, and ensure the **STATUS** column for that row states **Deployed**.
5. Optional: Click the name of your installation to check further details of your {{site.data.reuse.long_name}} installation. For example, you can check the ConfigMaps used, or check the logs for your pods.
6. [Log in](../../getting-started/logging-in) to your {{site.data.reuse.long_name}} adminstrative console to get started.

## Installing the CLI

The {{site.data.reuse.long_name}} CLI is a plugin for the {{site.data.reuse.icp}} CLI. You can use the {{site.data.reuse.long_name}} CLI to manage your {{site.data.reuse.long_name}} instance from the command line, such as creating, deleting, and updating topics.

To install the {{site.data.reuse.long_name}} CLI:
1. Ensure you have the [{{site.data.reuse.icp}} CLI installed](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/manage_cluster/install_cli.html).
2. {{site.data.reuse.icp_ui_login}}
3. Click the **Toolbox** tab.
4. Go to the **{{site.data.reuse.long_name}} command-line interface** section and click **Find out more**.
5. Download the {{site.data.reuse.long_name}} CLI plug-in for your system by using the appropriate link.
6. Install the plugin using the following command: <br /> `cloudctl plugin install <full_path>/es-plugin`

To start the {{site.data.reuse.long_name}} CLI check all available commands in the CLI, use the `cloudctl es` command. To get help on each command use the `--help` option.

To use the {{site.data.reuse.long_name}} CLI on a deployed {{site.data.reuse.icp}} cluster, run the following three commands, replacing `<master_ip>` with your master node IP address, `<master_port>` with the master node port number (default is `8443`), and `<my_cluster>` with your cluster name:

`cloudctl login -a https://<master_ip>:<master_port>`

`cloudctl cluster-config <my_cluster>`

`cloudctl es init`

**DRAFT COMMENT:** _UI needs updating with link to ICP 3.1.0 and bx to cloudctl._

## Enabling external client access

You can [set up external client access](../planning/#connecting-external-clients) during installation. After installation, clients can connect to the Kafka cluster by using the externally visible IP address for the Kubernetes cluster. The port number for the connection is allocated automatically and varies between installations. To look up this port number after the installation is complete:

1. {{site.data.reuse.icp_ui_login}}
2. Enter an {{site.data.reuse.icp}} administrator user name and password.
3. From the navigation menu, click **Workloads > Helm Releases**.
4. Locate the release name used during the installation in the **NAME** column, and click it.
5. Scroll down to the **Notes** section at the bottom of the page and review the instructions for determining the port number to use for external access.

Before connecting an external client, ensure the necessary certificates are configured within your client environment. Use the TLS and CA certificates if you provided them during installation, or export the self-signed public certificate from the browser as follows:

1. {{site.data.reuse.icp_ui_login}}
2. Review the certificate for the page and export this to a certificate file. The steps to do this are browser specific.
3. Register the single certificate file within your client environment.

## Modifying Kafka configurations

If you want to change Kafka configuration settings after installing {{site.data.reuse.long_name}}, you can [modify them later as well](../../administering/modifying-configs/#modifying-post-installation).

## Scaling

Depending on the size of the environment that you are installing, consider scaling and sizing options. You might also need to change scale and size settings for your services over time. For example, you might need to add additional Kafka brokers over time.

See [how to scale your environment](../../administering/scaling)

## Considerations for GDPR readiness

It is important you consider [encrypting your data](../../security/encrypting-data/) for protecting it from loss or unauthorized access.

**DRAFT COMMENT:**
Get template for topic like this <https://www.ibm.com/support/knowledgecenter/SSURRN/com.ibm.cem.doc/em_gdpr.html>
Related Git issue: <https://github.ibm.com/mhub/qp-planning/issues/622>
