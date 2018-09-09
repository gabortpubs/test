---
title: "Logging in"
permalink: /docs/getting-started/logging-in/
excerpt: "Log in to your IBM Event Streams installation."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: false
---

Log in to your {{site.data.reuse.long_name}} installation. To determine the administrative console URL:

1. {{site.data.reuse.icp_ui_login}}
2. From the navigation menu, click **Workloads > Helm Releases**.
3. Locate the release name of your {{site.data.reuse.long_name}} installation in the **NAME** column.
4. Expand the **Launch** link in the row and click **admin-ui-https**. The {{site.data.reuse.long_name}} log in page is displayed. <br /> **Note:** You can also determine the {{site.data.reuse.long_name}} administrative console URL by using the CLI. Click the release name and scroll to the **Notes** section at the bottom of the page and follow the instructions. You can then use the URL to log in.
5. Use your {{site.data.reuse.icp}} administrator user name and password to access the administrative console. If you are logging in for the first time, use the default `admin` user name and `admin` password. **DRAFT COMMENT:** _Is this accurate?_

From the **Getting started** page, you can learn about the concepts of the underlying techcnology, explore what {{site.data.reuse.long_name}} has to offer, and even [generate a starter application code](../generating-starter-app) that lets you learn more about writing applications.

You can also [test message loads](../testing-loads) to determine the best setup for your environment.
