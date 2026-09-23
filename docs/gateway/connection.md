---
title: Gateway Connection
---

TruckersHub Web Socket allows you to access the live data. By utilizing Web Sockets you can take your hub to a next level and enhance the experience of your drivers by providing them their data in real-time.

# How to connect?

In order to connect to the TruckersHub WebSocket you need to know, below we have provided a javascript example that you can use to quickly get connected.

###### Javascript example

```js
const socket = new WebSocket('wss://gateway.truckershub.in/');

socket.addEventListener("open", () => {
    socket.send(
        JSON.stringify({
            type: "AUTH",
            data: {
                subscribe_to: {
                    all_drivers: true,
                },
                game: "ets2"
            },
        }),
    );
});
                        
socket.addEventListener("message", ({ data: message }) => {
    let { type, data } = JSON.parse(message);

    if (type === "AUTH_ACK") {
        setInterval(() => {
            socket.send(
                JSON.stringify({
                    type: "HEART_BEAT",
                }),
            );
        }, data.heartbeat_interval \* 1000);
    }

    if (type === "PLAYER_DATA" || type === "NEW_EVENT") {
        console.log(data)
    }
});
```
