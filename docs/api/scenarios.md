---
title: Driving Academy Scenarios
---

In order to recieve Driving Academy Scenarios of your company or drivers, you will need to perform following API Calls:

## Driving Academy Scenarios endpoints

Use the pages in this section to find each endpoint.

---

## VTC Scenarios

You can get all your company driving academy scenarios by making a `GET` request to `https://api.truckershub.in/v1/scenarios`

You can also include the month and year to get scenarios from specific month and Year as query parameter (after Question Mark). `https://api.truckershub.in/v1/scenarios?month=3&year=2024`

After a successfully call an array of the [Scenario Object](/typedefs/scenario-object) will be returned.

---

## Specific VTC Scenarios

You can get specific Driving Academy Scenario of your company by making a `GET` request to `https://api.truckershub.in/v1/scenarios/:scenarioID`. `:scenarioID` must be replaced with a Scenario ID number.

After a successfully call an instance of the [Scenario Object](/typedefs/scenario-object) will be returned.

---

## Specific Driver Scenarios

You can get all Driving Academy Scenarios done by a specific driver in your company by making a `GET` request to `https://api.truckershub.in/v1/drivers/:steamID/scenarios`. `:steamID` must be replaced with a SteamID64.

You can also include the month and year to get jobs from specific month and Year as query parameter (after Question Mark). `https://api.truckershub.in/v1/drivers/:steamID/scenarios?month=3&year=2024`

After a successfully call an array of the [Scenario Object](/typedefs/scenario-object) will be returned.