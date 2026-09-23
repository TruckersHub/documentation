---
title: Event Slots
---

Slots System API Calls are only for the VTCs who have atleast 10 boosts.

In order to recieve Slots System Details, you will need to perform following API Calls:

## Event Slots endpoints

Use the pages in this section to find each endpoint.

---

## TruckersHub Events Slots Data

You can get TruckersHub Events Slots Data by making a `GET` request to `https://api.truckershub.in/v1/events/:eventID/slots`. You will need to replace `:eventID` with the events ID.

After a successfully call an instance of the [Events Object](/typedefs/events-object) will be returned.

---

## Event Slots Booking

VTC slots can be booked by making a `POST` request to `https://api.truckershub.in/v1/events/:eventID/slots`. You will need to replace `:eventID` with the events ID. You will need to include the following data in the request body:

```json
{
   body: {
      email: "truckershub2023@gmail.com",
      vtc_name: "TruckersHub",
      vtcLink: "https://truckershub.in/vtc/1",
      position: "Founder",
      discord: "https://discord.truckershub.in/",
      attendees: "Number between 1-5",
      slot: [
         "1"
      ]
   }
}
```

After a successfully call an instance of the [Slots Object](/typedefs/slots-object) will be returned.

---

## TruckersHub Events Slots Bookings Update

You can update TruckersHub Events Slots Booking by making a `POST` request to `https://api.truckershub.in/v1/events/:eventID/slots/:time/status/:status`. You will need to replace `:eventID` with the events ID and `:time` with the slot booked timing and `:status` with accept, hold and decline.

After a successfully call an instance of the [Slots Object](/typedefs/slots-object) will be returned.