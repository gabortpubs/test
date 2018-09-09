---
title: "Encrypting your data"
permalink: /docs/security/encrypting-data/
excerpt: "Encrypt your data to improve security."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: false
---

By default, data within the {{site.data.reuse.long_name}} deployment is not encrypted. To secure this data, you must ensure that any storage and communication channels are encrypted as follows:

* Encrypt data at rest by encrypting volumes using [dm-crypt](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/installing/etcd.html).
* Encrypt internal network traffic within the cluster with [IPSec](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/installing/ipsec_mesh.html).
* Encrypt messages in applications.
* Encrypt your storage.
* If external access is enabled, you must encrypt communication with [external clients](../../installing/planning/#connecting-external-clients). <br /> **DRAFT COMMENT:** _Can this be changed after installation?_
