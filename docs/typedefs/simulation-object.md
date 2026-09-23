---
title: Vtc Simulation Object
---

# VTC Simulation Object

```json
{
    vtcID: 21,
    headquater: "kassel",
    headquaterATS: "san_francisc",
    balance: 963,
    cities: [
        {
            name: "Kassel",
            id: "kassel",
            game: 1,
            companies: [
                "bcp",
                "tradeaux"
            ]
        }
    ],
    jobs: [Simulation Job Object],
    market: [Simulation Job Object],
    finance: [Simulation Finances Object]
}
```

| Parameter | Type |
| --- | --- |
| `vtcID` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `headquater` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `headquaterATS` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `balance` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `cities` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| `cities.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `cities.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `cities.game` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `cities.companies` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| `jobs` | [Simulation Job Object](/typedefs/simulation-job-object) |
| `market` | [Simulation Job Object](/typedefs/simulation-job-object) |
| `finance` | [Simulation Finances Object](/typedefs/simulation-finance-object) |
