---
title: Player Data
---

# Player Data

Type: `PLAYER_DATA`

This event is sent once Telemetry of a player is updated / changed.

```json
{
   type: "PLAYER_DATA",
   data: {
      driver: "76561199051221570",
      game: "Game",
      telemetry: "Telemetry Data"
   }
}
```

| Parameter | Type | Optional |
| --- | --- | --- |
| `driver` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `No` |
| `game` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `No` |
| `telemetry` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | `No` |
