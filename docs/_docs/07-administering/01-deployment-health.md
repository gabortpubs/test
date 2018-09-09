---
title: "Monitoring deployment health"
permalink: /docs/administering/deployment-health/
excerpt: "Understand the health of your deployment at a glance, and learn how to find information about problems."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

Understand the health of your {{site.data.reuse.long_name}} deployment at a glance, and learn how to find information about problems.

## Using the UI

The {{site.data.reuse.long_name}} UI provides information about the health of your environment at a glance. In the bottom right corner of the UI, a message shows a summary status of the system health. If there are no issues, the message states **System is healthy**.

If any of the {{site.data.reuse.long_name}} resources experience problems, the message states **component isn't ready**.

To find out more about the problem:

1. Click the message to expand it, and then expand the section for the component that does not have a green tick next to it.<br />![Example screen capture showing when a component is not ready, stating "Pod 3 is not ready" as a link.](../../../images/component-not-ready.png){:height="50%" width="50%"}
2. Click the **Pod is not ready** link to open more details about the problem. The link opens the {{site.data.reuse.icp}} UI. Log in as an administrator.
3. To understand why the {{site.data.reuse.long_name}} resource is not available, click the **Events** tab to view details about the cause of the problem.
4. Click the **Logs** tab for for more detailed information about the problem.
5. For guidance on resolving common problems that might occur, see the [troubleshooting section](../../troubleshooting/intro/).

## Using the CLI

You can check the health of your {{site.data.reuse.long_name}} environment using the Kubernetes CLI.

1. Ensure you have the [Kubernetes command line tool installed](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/manage_cluster/cfc_cli.html), and configure access to your cluster.
<br />
**DRAFT:** _(CHECK LINK BEFORE RELEASE) Why does previous link no longer have this [bx pr cluster-config](https://www-03preprod.ibm.com/support/knowledgecenter/SSBS6K_2.1.0.3/manage_cluster/cfc_cli.html)_
2. To check the status and readiness of the pods, run the following command, where `<namespace>` is the space used for your {{site.data.reuse.long_name}} installation: <br />`kubectl -n <namespace> get pods` <br />The command lists the pods together with simple status information for each pod.<br />
3. To retrieve further details about the pods, including events affecting them, use the following command:<br />`kubectl -n <namespace> describe pod <pod-id>`
4. To retrieve detailed log data for a pod to help analyze problems, use the following command:<br />`kubectl -n <namespace> logs <pod-id>`

For more information about using the `kubectl` command for debugging, see the [Kubernetes documentation](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application-introspection/#using-kubectl-describe-pod-to-fetch-details-about-pod).

**Note:** The `kubectl` command can only extract information about running services. If a service restarts, logging is restarted as well, and existing log information is deleted.

**Tip:** You can also use the [management logging service, or ELK stack](https://www.ibm.com/support/knowledgecenter/sv/SSBS6K_2.1.0.3/manage_metrics/logging_elk.html), deployed by {{site.data.reuse.icp}} to find more log information.

Setting up the built-in ELK stack is part of the [installation planning tasks](../../installing/planning/#logging).
