---
title: API Reference
sidebar_position: 1
description: Explore the TruckersHub REST API and integrate TruckersHub data into your applications.
---

# TruckersHub API Reference

The **TruckersHub REST API** allows developers to connect their applications and services to the TruckersHub platform.

It provides access to data from your Virtual Trucking Company, including drivers, jobs, routes, statistics, live data, events, simulation systems, notifications, social activities, and user sessions.

Whether you are building a custom VTC dashboard, statistics system, management panel, website integration, or another application, the TruckersHub API provides the data you need to build your own experience.

## Getting Started

Before using the TruckersHub API, you should have a **TruckersHub Virtual Trucking Company**.

TruckersHub provides a tracking platform for Virtual Trucking Companies operating in:

- Euro Truck Simulator 2
- American Truck Simulator

The TruckersHub Tracker collects supported in-game telemetry and provides the data required by the TruckersHub platform.

You can create your company from the TruckersHub website:

[Create your Virtual Trucking Company](https://truckershub.in/vtc/create)

Once your company has been created, you can generate an API token from your TruckersHub integrations page.

---

## Base URL

All TruckersHub API requests use the following base URL:

```text
https://api.truckershub.in/v1