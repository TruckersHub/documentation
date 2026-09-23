---
title: Jobs
---

In order to recieve jobs of your company or drivers, you will need to perform following API Calls:

## Jobs endpoints

Use the pages in this section to find each endpoint.

---

## VTC Jobs

You can get all your company jobs by making a `GET` request to `https://api.truckershub.in/v1/jobs`

You can also include the month and year to get jobs from specific month and Year after Question Mark. `https://api.truckershub.in/v1/jobs?month=3&year=2024`

After a successfully call an array of the [Job Object](/typedefs/job-object) will be returned.

---

## Specific VTC Job

You can get specific job of your company by making a `GET` request to `https://api.truckershub.in/v1/jobs/:jobID`. `:jobID` must be replaced with a job ID number.

After a successfully call an instance of the [Job Object](/typedefs/job-object) will be returned.

---

## Specific Driver Jobs

You can get all jobs done by a specific driver in your company by making a `GET` request to `https://api.truckershub.in/v1/drivers/:steamID/jobs`. `:steamID` must be replaced with a SteamID64.

You can also include the month and year to get jobs from specific month and Year after Question Mark. `https://api.truckershub.in/v1/drivers/:steamID/jobs?month=3&year=2024`

After a successfully call an array of the [Job Object](/typedefs/job-object) will be returned.