---
title: Player Online
---

# Player Online

Type: `PLAYER_ONLINE`

This event is sent once a subscribed player comes online.

```json
{
   type: "PLAYER_ONLINE",
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
