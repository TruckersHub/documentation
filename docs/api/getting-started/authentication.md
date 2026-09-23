---
title: Authentication
---

The API allows you to connect your hub with our platform. By using TruckersHub API you can automate nearly every in game data, allowing a seamless experience for your company and your drivers.

In order to use TruckersHub API, we need to know who you are.

To do this we use API Token via the `Authorization` header.

To get your `API Token` you need to go to [integrations -> API](https://truckershub.in/integrations) to copy API Token for your company.

Next, you need to create a complete Authorization header:

```json
{
   Authorization: "YOUR_API_TOKEN"
}
```

Make sure to include this with every request you do to the TruckersHub API as it is the only way we are able to identify you.

Also make sure to add the Following Header for all of the `POST` Requests to be able to process the request successfully.

```json
{
   "Content-Type": "application/json"
}
```
