---
title: Notifications
---

Statistics API Calls are only for the VTCs who have atleast 1 boosts.

## Notifications endpoints

Use the pages in this section to find each endpoint.

---

## VTC Notification Data

You can get TruckersHub VTC Notification Data by making a `GET` request to `https://api.truckershub.in/v1/notifications`.

After a successfully call an instance of the [Notification Object](/typedefs/notification-object) will be returned.

---

## Specific User Notification Data

Specific Users notifications can be fetched by making a `GET` request to `https://api.truckershub.in/v1/notifications/:userID`. You will need to replace `:userID` with the User's TruckersHub ID.

After a successfully call an array of the [Notification Object](/typedefs/notification-object) will be returned.

---

## Notifications Read

You can mark notifications as read by making a `GET` request to `https://api.truckershub.in/v1/notifications/:notificationID/read?userID=:userID`. You will need to replace `:notificationID` with the notification ID and `:userID` with the user's TruckersHub ID.

After a successfully call, redirect URL will be returned.