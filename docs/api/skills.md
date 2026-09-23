---
title: Skills
---

Skills API Calls are only for the VTCs who have atleast 5 boosts.

In order to recieve Skills Data, you will need to perform following API Calls:

## Skills endpoints

Use the pages in this section to find each endpoint.

---

## TruckersHub Skills Data

You can get all TruckersHub's Skills Data by making a `GET` request to `https://api.truckershub.in/v1/skills`.

After a successfully call, TruckersHub Skills Data will be returned.

---

## Driver's Skills

You can get Skills Data of your company Drivers by making a `GET` request to `https://api.truckershub.in/v1/skills/:steamID`. You will need to replace `:steamID` with the drivers SteamID64.

After a successfully call an instance of the [Skills Object](/typedefs/skills-object) will be returned.

---

## Update Driver Skills

Driver Skills can be updated by making a `POST` request to `https://api.truckershub.in/v1/skills/:steamID`. You will need to replace `:steamID` with the drivers SteamID64.

After a successfully call an instance of the [Skills Object](/typedefs/skills-object) will be returned.