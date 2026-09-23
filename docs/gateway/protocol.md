---
title: Gateway Protocol
---

# Connecting to the WebSocket

TruckersHub communicates via secure websockets. To get started, you will need to connect to the TruckersHub WebSocket using this address: `wss://gateway.truckershub.in/`

#### Structure

TruckersHub structure looks like this:

```json
{
   type: "TYPE",
   "data": {}
}
```

#### Heartbeat

Every client needs to send Heartbeat to TruckersHub Websocket every `30 seconds` in order to stay connected with the gateway.

This heartbeat allows us to ensure that we are only sending data to the clients which are actually alive.

If a heartbeat is not recieved within 30 seconds of the last heartbeat the client will be automatically disconnected by the gateway server.

#### Types
