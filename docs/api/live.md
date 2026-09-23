---
title: Live Data
---

Live Data API Calls are only for the VTCs who have atleast 2 boosts.

In order to recieve Live Delivery or Online Drivers Data of your company, you will need to perform following API Calls:

## Live Data endpoints

Use the pages in this section to find each endpoint.

---

## Online Drivers

You can get all Online Drivers Data of your company by making a `GET` request to `https://api.truckershub.in/v1/live/drivers`.

After a successfully call an array of the [Driver Object](/typedefs/driver) will be returned.

---

## Live Delivery Data

You can get all Live Delivery Data of your company Drivers by making a `GET` request to `https://api.truckershub.in/v1/live/delivery`.

After a successfully call an array of the Driver Telemetry will be returned.