---
title: "Installing"
permalink: /docs/installing/installing/
excerpt: "Installing the Community Edition of IBM Event Streams."
last_modified_at: 2018-07-22T11:22:01-05:00
toc: false
---

Install {{site.data.reuse.long_name}} as follows.

1. Ensure you have set up your environment [according to the prerequisites](../prerequisites).
2. Ensure you have [planned for your installation](../planning), including setting up a namespace.
3. To install {{site.data.reuse.long_name}} (not the Community Edition), [download it](../downloading) first and make it available in the catalog.
3. If you want the installation to use Docker images that are hosted on a repository requiring authentication, [create an image pull secret](https://www.ibm.com/support/knowledgecenter/SSBS6K_2.1.0.3/manage_images/imagepullsecret.html) in the target namespace. Also, [configure the Docker settings](../configuring/#global-installation-settings) before installing. <br /> By default, the Docker images are hosted on Docker Hub and no secret is required.
4. Install {{site.data.reuse.long_name}} by using the helm chart as follows:
    1. Click **Catalog** in the top navigation menu.
    2. To install {{site.data.reuse.ce_long}}, search for `ibm-eventstreams-dev` and select it from the result. <br /> To install {{site.data.reuse.long_name}}, search for `ibm-eventstreams-prod` and select it from the result. <br /> The {{site.data.reuse.long_name}} README is displayed.
    3. Click **Configure**.<br /> **Note:** If you want to install {{site.data.reuse.long_name}} by using the CLI, follow the instructions in the README instead of clicking **Configure**.
    4. Enter a release name, select the target namespace you created previously, and accept the terms of the license agreement. You can leave all other parameters with their default values, or edit them as required to configure your installation. For example, you can set up persistant sotrage. For more information, see [configuring](../configuring).
    5. Click **Install**.
5. [Verify your installation](../post-installation/#verifying-your-installation) and consider other post-installation tasks.
