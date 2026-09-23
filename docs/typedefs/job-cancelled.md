---
title: Job Cancelled
---

# Job Cancelled

```json
{
   type: "cancelled",
   driver: "76561199051221571",
   game: "ets2",
   details: {
      expectedDeliveryTimestamp: {
         value: 17414455,
         unix: 723300000
      },
      plannedDistance: {
         km: 4505,
         miles: 2799
      },
      cargo: {
         mass: 9200,
         unitMass: 230,
         damage: 0,
         isLoaded: true,
         id: "arsenic",
         name: "Arsenic"
      },
      isSpecial: false,
      destination: {
         city: {
            id: "hannover",
            name: "Hannover"
         },
         company: {
            id: "sanbuild_cem",
            name: "Sanbuilders"
         }
      },
      source: {
         city: {
            id: "larochelle",
            name: "La Rochelle"
         },
         company: {
            id: "batisse_wind",
            name: "Bâtisse"
         }
      },
      market: {
         id: "quick_job",
         name: "Quick Job"
      },
      income: 86581,
      penalty: 12000,
      startedTimestamp: {
         value: 17406518,
         unix: 851880000
      },
      cancelledTimestamp: {
         value: 17406538,
         unix: 853080000
      }
   }
}
```

| Parameter | Type |
| --- | --- |
| `type` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `driver` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `details.expectedDeliveryTimestamp` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.plannedDistance` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.cargo` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.isSpecial` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `details.destination.city` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.destination.company` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.source.city` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.source.company` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.market` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.income` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `details.penalty` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `details.startedTimestamp` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `details.cancelledTimestamp` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
