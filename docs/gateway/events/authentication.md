---
title: Authentication
---

# Authentication

Type: `AUTH`

This operation is used by clients to authenticate with the Gateway. During this you also decide which clients you want to receive data from.

```json
{
   type: "AUTH",
   data: {
      subscribe_to: {
         to_company: 1
      },
      game: "ets2"
   }
}
```

| Parameter | Type | Optional |
| --- | --- | --- |
| `subscribe_to.all_drivers` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | `Yes` |
| `subscribe_to.to_drivers` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | `Yes` |
| `subscribe_to.to_driver` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | `Yes` |
| `subscribe_to.to_company` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | `Yes` |
| `game` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   (ets2 or ats) | `Yes` |
