---
title: "Setting up users"
permalink: /docs/security/users/
excerpt: "Set up user access."
last_modified_at: 2018-07-19T11:31:38-04:00
toc: true
---

Set up user access.

**DRAFT COMMENT:** _Talk to Tim and Tony about this, and include Andrew._

<!-- Email from Andrew:
Hi,
I promised to write down some security scenarios for Event Streams and ICP to check we're all on the same page for what's possible and how to achieve them.

User trying out Event Streams and ICP on their own system, want to connect up Kafka applications
Downloads ICP Community Edition and Event Streams Community Edition for free
No LDAP repository, so no teams
User is cluster administrator
Creates an instance of Event Streams in any namespace
Cluster administrator can log into the Event Streams UI with all capabilities available
Creates a service ID and API key for Event Streams instance with Editor role
This API key can be used as credential to connect to Event Streams using the Kafka client

User deploying Event Streams onto enterprise ICP system, want to connect up Kafka applications
ICP is connected to the corporate LDAP repository
A namespace is created for Event Streams and a team is associated with it
Event Streams is installed in that namespace by a user with Administrator role in the team
As a separate step, it is necessary to associate the Event Streams instance with the team
All users in the team can log into the Event Streams UI with their roles reflecting their capabilities, such as Viewers only able to view
All users in the team can create a service ID and API key for Event Streams instance with a role no higher than their own role
This API key can be used as credential to connect to Event Streams using the Kafka client
The API key access control policy does not specify resources, so it applies to the whole Event Streams instance
The service ID can optionally be associated with the team, but this is not necessary

As above, but applications have specific permissions to the Kafka resources they need to use
A user with Editor role creates two service IDs for different applications
The service IDs must not be associated with the team because their access should be restricted more tightly
For application 1, the service ID has two policies enabling it to connect and publish events on a topic "events":
Viewer on resource type "cluster"
Editor on resource type "topic", resource name "events"
For application 2, the service ID has three policies enabling it to connect, consume events on a topic "events" in a consumer group "event_consumer":
Viewer on resource type "cluster"
Viewer on resource type "topic", resource name "events"
Viewer on resource type "group", resource name "event_consumer"
The applications are able to communicate via the topic, but their access control ensures they do not step outside their required capabilities

As above, but the same restrictions are applied to users, namely one user can write to topic "events" and no other, and another user can read from topic "events" and consumer group "event_consumer" and nothing more.
This is not possible. If the users are in the same team, it's not possible to have different fine-grained access control policies for different users.

Please review and correct any errors.
-->
