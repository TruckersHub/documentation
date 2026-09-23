---
title: Player Offline
---

# Player Offline

Type: `PLAYER_OFFLINE`

This event is sent once a subscribed player goes offline.

```json
{
   type: "PLAYER_OFFLINE",
   data: {
      driver: "76561199051221570",
      game: "Game",
      data: "Driver Data"
   }
}
```

| Parameter | Type | Optional |
| --- | --- | --- |
| `driver` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `No` |
| `game` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `No` |
| `data` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | `No` |
