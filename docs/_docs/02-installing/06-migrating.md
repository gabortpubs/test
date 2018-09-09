---
title: "Migrating to IBM Event Streams"
permalink: /docs/installing/migrating/
excerpt: "Migrate from the Community Edition to IBM Event Streams."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: false
---

You can migrate from the {{site.data.reuse.ce_long}} to {{site.data.reuse.long_name}}.

Migrating involves removing your previous {{site.data.reuse.ce_short}} installation and installing {{site.data.reuse.long_name}} in the same namespace and using the same release name. Using this procedure, your settings and data are also migrated to the new installation.

1. {{site.data.reuse.icp_cli_login}}
2. Delete the {{site.data.reuse.ce_short}} installation, making a note of the namespace and release name:<br /> `helm delete --purge <release_name>`
3. Install {{site.data.reuse.long_name}} in the same namespace and using the same release name: <br /> `helm install --name <previous_release_name> --namespace=<previous_namespace> --set license="accept" --set persistence.enabled=true --set zookeeper.persistence.enabled=true <full_path_to_chart/ibm-eventstreams-prod>`<br /> {{site.data.reuse.long_name}} is installed with the configuration settings and data migrated from the {{site.data.reuse.ce_short}} to your new installation.
