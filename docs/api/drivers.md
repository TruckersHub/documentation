---
title: Drivers
---

In order to receive jobs from your drivers, you will need to add them to your company. You can do this easily through our [Members Dashboard](https://truckershub.in/members) or by using the API. Drivers are identified by SteamID64.

## Drivers endpoints

Use the pages in this section to find each endpoint.

---

## Getting Drivers List

Drivers can be fetched of the company by making a `GET` request to `https://api.truckershub.in/v1/drivers`.

After a successful request, an array of the [Driver Object](/typedefs/driver) will be returned.

---

## Getting a Driver

Specific Driver can be fetched of the company by making a `GET` request to `https://api.truckershub.in/v1/drivers/:steamID`. You will need to replace `:steamID` with the drivers SteamID64.

After a successfully request, an instance of the [Driver Object](/typedefs/driver) will be returned.

---

## Adding Driver

Drivers can be added to the company by making a `POST` request to `https://api.truckershub.in/v1/drivers`. You will need to include the SteamID64 of the driver in the request body:

```json
{
   body: {
      steamID: "76561199051221571"
   }
}
```

After successfully adding a driver an instance of the [Driver Object](/typedefs/driver) will be returned.

---

## Removing Driver

To remove a driver from your company you will need to make a `DELETE` request to `https://api.truckershub.in/v1/drivers/:steamID`. You will need to replace `:steamID` with the drivers SteamID64.

If a driver has been successfully removed from your company, you will receive a `200` response.