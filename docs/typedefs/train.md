---
title: Train
---

# Train

```json
{
   type: "train",
   driver: "76561199051221571",
   game: "ets2",
   details: {
      source: {
         name: "Calais",
         id: "tunnel_c"
      },
      destination: {
         name: "Folkestone",
         id: "tunnel_d"
      },
      amount: 300,
      target: {
         name: "Folkestone",
         id: "tunnel_d"
      }
   }
}
```

| Parameter | Type |
| --- | --- |
| `type` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `driver` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `details.source` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.destination` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.amount` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `details.target` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
