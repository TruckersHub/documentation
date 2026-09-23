---
title: Auth Acknowledgement
---

# Auth Acknowledgement

Type: `AUTH_ACK`

This event is sent once authentication request is recieved.

```json
{
   type: "AUTH_ACK",
   data: {
      heartbeat_interval: 30,
      drivers: [
         "Drivers Steam IDs"
      ]
   }
}
```

| Parameter | Type | Optional |
| --- | --- | --- |
| `heartbeat_interval` | [Integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | `No` |
| `drivers` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | `Yes` |
