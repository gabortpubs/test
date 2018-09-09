---
title: "Downloading"
permalink: /docs/installing/downloading/
excerpt: "Download the IBM Event Streams image and make it available to be installed."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: false
---

Download and extract the {{site.data.reuse.long_name}} installation image file from the IBM® Passport Advantage® site before installing it into {{site.data.reuse.icp}}.

1. Go to [IBM® Passport Advantage®](https://www-01.ibm.com/software/passportadvantage/pao_customer.html), and search for PART NUMBER CNXXXX to locate the {{site.data.reuse.long_name}} image `<PPA-image-name.tar.gz>`. <br />**Note:** If you do not have {{site.data.reuse.icp}} installed already, you can download {{site.data.reuse.icp_foundation}} together with IBM Event Streams and [install it](https://www.ibm.com/support/knowledgecenter/SSBS6K_3.1.0/installing/install.html). IBM Event Streams includes entitlement for IBM Cloud Private Foundation.
2. {{site.data.reuse.icp_cli_login}} <br />**DRAFT COMMENT:** is this the master node IP address?
3.  Log in to the Docker private image registry. For example, to log in to the default internal repository use the following command: `docker login mycluster.icp:8500` **DRAFT COMMENT:** Link to where this is explained in ICP KC.
4. Install the downloaded helm chart from the compressed file. For example, to install in the default cluster name, use the following command: `cloudctl catalog load-ppa-archive --archive <archiveName> --clustername mycluster.icp` <br />
   **Note:** It's important that the --clustername parameter can resolve on the local and the target {{site.data.reuse.icp}} systems. If needed, you can add entries to your system's host file to enable this. The default value for the `--clustername` parameter is `mycluster.icp`. For more information, see **DRAFT COMMENT:** `ICP docs link`. <br />**DRAFT COMMENT: Can we install directly on box rather than remotely to simplify process?**
4. Synchronize the repository:
    1. Log in to your {{site.data.reuse.icp}} cluster management console from a supported web browser by using the URL  `https://<master_ip>:8443`, where `master_ip` is the IP address of the master node for your {{site.data.reuse.icp}} cluster.
    2. From the navigation menu, click **Manage > Helm Repositories**.
    3. Click **Sync repositories**.
5. [Install {{site.data.reuse.long_name}}](../installing).
