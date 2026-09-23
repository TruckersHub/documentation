---
title: New Event
---

# New Event

Type: `NEW_EVENT`

This event is sent once a new event is available for the subscribed player.

```json
{
   type: "NEW_EVENT",
   data: {
      type: "EVENT_TYPE",
      driver: "76561199051221570",
      game: "Game",
      details: "EVENT_DETAILS"
   }
}
```

| Parameter | Type | Optional |
| --- | --- | --- |
| `type` | [Type Defs](/typedefs) | `No` |
| `driver` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `No` |
| `game` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `No` |
| `details` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | `No` |
