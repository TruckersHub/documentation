---
title: Events
---

Some events API are free to use whereas some takes up to 10 boosts to be accessed.

In order to recieve Event System Details, you will need to perform following API Calls:

## Events endpoints

Use the pages in this section to find each endpoint.

---

## TruckersHub Events Data

You can get TruckersHub Events Data by making a `GET` request to `https://api.truckershub.in/v1/events`.

After a successfully call an instance of the [Events Object](/typedefs/events-object) will be returned.

---

## VTC Events Data

You can get TruckersHub VTC's Events Data by making a `GET` request to `https://api.truckershub.in/v1/events/vtc`. This call will require 5 VTC boosts.

After a successfully call a list of the [Events Object](/typedefs/events-object) will be returned.

---

## Create VTC Events

VTC events may be created by making a `POST` request to `https://api.truckershub.in/v1/events/vtc/create`. You will need to include the following data in the request body:

```json
{
   body: {
      game: "Euro Truck Simulator 2",
      server: "Event Server",
      title: "TruckersHub Convoy",
      meetup: "2024-07-07 12:00",
      start: "2024-07-07 13:00",
      sourceCity: "katowice",
      sourceLocation: "Slots",
      destCity: "aberdeen",
      destLocation: "City",
      type: "Convoy",
      dlcs: [
         "Going East"
      ],
      description: "This is a test Description",
      communication: "Link_here",
      external: "Link_here",
      enable_chats: true,
      isSlot: true,
      slotCount: 40,
      slotURL: [
         "Links_here"
      ],
      banner: "Banner_link",
      route: "Route_Link"
   }
}
```

After a successfully call an instance of the [Events Object](/typedefs/events-object) will be returned.

---

## Get Specific Event Data

You can get Specific Event Data of your company by making a `GET` request to `https://api.truckershub.in/v1/events/:eventID`. You will need to change :EventID with the number.

After a successfully call an Instance of the [Events Object](/typedefs/events-object) will be returned.

---

## Edit an Event

You can edit an Event by making a `POST` request to `https://api.truckershub.in/v1/events/:eventID/edit`. You will need to include the Simulation Job ID of the driver in the request body:

```json
{
   body: {
      game: "Euro Truck Simulator 2",
      server: "Event Server",
      title: "TruckersHub Convoy",
      meetup: "2024-07-07 12:00",
      start: "2024-07-07 13:00",
      sourceCity: "katowice",
      sourceLocation: "Slots",
      destCity: "aberdeen",
      destLocation: "City",
      type: "Convoy",
      dlcs: [
         "Going East"
      ],
      description: "This is a test Description",
      communication: "Link_here",
      external: "Link_here",
      enable_chats: true,
      isSlot: true,
      slotCount: 40,
      slotURL: [
         "Links_here"
      ],
      banner: "Banner_link",
      route: "Route_Link"
   }
}
```

After a successfully call an instance of the [Events Object](/typedefs/events-object) will be returned.

---

## Remove an Event

You can remove an event of your company by making a `DELETE` request to `https://api.truckershub.in/v1/events/:eventID`.You will need to replace `:eventID` with the events ID.

After a successfully call an Instance of the [Events Object](/typedefs/events-object) will be returned.