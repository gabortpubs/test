---
title: "UI error on Firefox"
permalink: /docs/troubleshooting/ui-error-firefox/
excerpt: "."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

You might see the following error code when launching the {{site.data.reuse.long_name}} UI in Firefox: `SEC_ERROR_REUSED_ISSUER_AND_SERIAL`

## Symptoms

You might see the following error either after reinstalling {{site.data.reuse.long_name}}, or when two instances of the {{site.data.reuse.long_name}} UI are connecting to two different {{site.data.reuse.long_name}} installations while using the same external IP address or host name.

```Secure Connection Failed An error occurred during a connection to 1.2.3.4:31305. You have received an invalid certificate. Please contact the server administrator or email correspondent and give them the following information: Your certificate contains the same serial number as another certificate issued by the certificate authority. Please get a new certificate containing a unique serial number. Error code: SEC_ERROR_REUSED_ISSUER_AND_SERIAL```

```The page you are trying to view cannot be shown because the authenticity of the received data could not be verified. Please contact the website owners to inform them of this problem.```

## Causes

This is caused by having an incorrect certifcate in the Firefox certifcate manager.

## Resolving the problem

To resolve this issue delete the certificate from the Firefox certificate manager under **Options > Advanced > Certificates > View Certificates > Servers**.

The default name for the certificate to delete is **myserver**, and the server listed is the `hostname` or `ipaddress` used to access the {{site.data.reuse.long_name}} UI. If the **External Hostname/IP address** was altered from the default value when installing {{site.data.reuse.long_name}}, then the name of the certificate matches this value instead. Cached certifcates have also been seen under the **(Unknown)** section of this page with name **(Not stored)**, and a value for the server that matches that of the {{site.data.reuse.long_name}} UI `ipaddress` or `hostname`.
