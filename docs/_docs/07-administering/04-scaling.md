---
title: "Scaling"
permalink: /docs/administering/scaling/
excerpt: "Scaling"
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

What scaling can be done for {{site.data.reuse.long_name}}?

Tom said: Do not use kubectl command to scale up or down.

`kubectl scale --replicas=3` for kafka sts - which would scale the specified pod up to three copies

So this cannot be done? <https://kubernetes.io/docs/tasks/run-application/scale-stateful-set/>

Reference: <https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale>

or this: <https://www.ibm.com/support/knowledgecenter/SSBS6K_2.1.0.2/manage_applications/scaling_app.html>

So what can be done for scaling?
- Main one is increasing number of brokers if needed. How?
- Increase memory. How?

Do it via helm_upgrade commands?

Would something like this work for Event Streams too? <https://www.ibm.com/support/knowledgecenter/SSURRN/com.ibm.cem.doc/em_scaling.html>

Also, some other examples:

<https://www.ibm.com/support/knowledgecenter/SS8G7U_18.2.0/com.ibm.app.mgmt.doc/content/planning_scale_horizontal.htm>
<https://www.ibm.com/support/knowledgecenter/SS8G7U_18.2.0/com.ibm.app.mgmt.doc/content/planning_scale_cassandra.htm>
<https://www.ibm.com/support/knowledgecenter/SS8G7U_18.2.0/com.ibm.app.mgmt.doc/content/planning_scale_kafka.htm>

**DRAFT:** _Worth adding the following?_
To understand the scaling requirements of your environment, you can [generate message loads](../../getting-started/testing-loads/) and see how your setup repsonds. Use the results to inform your scaling settings and consider changing them as needed.
