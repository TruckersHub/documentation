---
title: Job Object
---

# Job Object

```json
{
    autoParked: true,
    isTruckersMP: true,
    isConvoyFeature: false,
    isSpecial: false,
    isOffer: false,
    isSim: false,
    "driver": Driver Object,
    source: {
        city: {
            id: "nice",
            name: "Nice"
        },
        company: {
            id: "tradeaux",
            name: "Tradeaux"
        }
    },
    destination: {
        city: {
            id: "nice",
            name: "Nice"
        },
        company: {
            id: "lisette_log",
            name: "Lisette Logistics"
        }
    },
    cargo: {
        id: "wood_bark",
        name: "Wood Bark",
        mass: 6480,
        unit_mass: 240,
        damage: 0,
        language: "en"
    },
    truck: {
        ownTruck: true,
        ownTruckID: 1,
        vtcTruck: false,
        vtcTruckID: null,
        truckVTCID: null,
        id: "mercedes",
        name: "Mercedes-Benz",
        model: {
            id: "vehicle.mercedes.actros",
            name: "Actros"
        },
        odometer: 539235.0625,
        initialOdometer: "0",
        licensePlate: {
            value: "AP-114-ZR. ",
            country: {
                id: "france",
                name: "France"
            }
        },
        current_damage: {
            cabin: 0,
            chassis: 0,
            engine: 0,
            transmission: 0,
            wheels: 0,
            total: 0
        }
    },
    trailer: {
        name: "",
        bodyType: "dumper",
        chainType: "single",
        wheels: 6,
        brand: {
            id: "",
            name: ""
        },
        licensePlate: {
            value: "CA-284-RF. ",
            country: {
                name: "France",
                id: "france"
            }
        },
        damage: {
            cargo: 0,
            chassis: 0,
            wheels: 0,
            total: 0
        }
    },
    game: {
        id: "ets2",
        name: "Euro Truck Simulator 2",
        version: "1.50.1.4",
        isTrafficOffense: false,
        isFatigueEnabled: false
    },
    multiplayer: {
        type: "TruckersMP"
        server: "Simulation 1"
        playerID: 1431
    },
    market: {
        id: "quick_job",
        name: "Quick Job"
    },
    topSpeed: "20.39",
    avgSpeed: "13.89",
    income: 356,
    distanceDriven: 1,
    plannedDistance: 1,
    fuel: {
        current: 316.19366455078125,
        burned: 0,
        purchased: 0
    },
    realtime: {
        start: 1679051112423,
        end: 1679051157925,
        timeTaken: 45502
    },
    expectedDeliveryTimestamp: 17420288,
    deliveredTimestamp: 17419990,
    earnedXP: 1,
    "events": [...],
    "mods": [...],
    clientVersion: "1.0.0",
    THP: 0.12,
    THP_details: {
        THP: 0.12,
        baseToken: "0.10",
        kmToken: "0.01",
        tonnToken: "0.00",
        speedToken: "0.01",
        parkToken: "0.00",
        worldOfTrucksToken: "0.00",
        valueToken: "0.00",
        fragileToken: "0.00",
        overweightToken: "0.00",
        adrToken: "0.00",
        danageToken: "0.00"
    },
    revenue: 1648,
    revenue_details: {
        rup: 1648,
        vtcRup: 1752,
        userRup: -101,
        base: 2509,
        vtcBase: 2007,
        userBase: 502,
        levelBonus: 115,
        distanceBonus: 100,
        adrBonus: 0,
        highvalueBonus: 0,
        fragileCargoBonus: 8,
        weightBonus: 0,
        fuelCost: 235,
        rent: 364,
        tax: 449,
        cargoDamage: 400,
        truckDamage: 0,
        trailerDamage: 0
    },
    rating: 5,
    jobID: 9375
}
```

| Parameter | Type |
| --- | --- |
| `autoParked` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `isTruckersMP` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `isConvoyFeature` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `isSpecial` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `isOffer` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `isSim` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `driver` | [Driver Object](/typedefs/driver) |
| `source.city.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `source.city.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `source.company.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `source.company.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `destination.city.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `destination.city.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `destination.company.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `destination.company.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `cargo.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `cargo.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `cargo.mass` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `cargo.unit_mass` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `cargo.damage` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `cargo.language` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.ownTruck` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `truck.ownTruckID` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.model.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.model.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.odometer` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.initialOdometer` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.current_damage.cabin` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.current_damage.chassis` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.current_damage.engine` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.current_damage.transmission` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.current_damage.wheels` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.current_damage.total` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `truck.licensePlate.value` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.licensePlate.country.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `truck.licensePlate.country.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.bodyType` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.chainType` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.wheels` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `trailer.brand.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.brand.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.damage.cargo` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `trailer.damage.chassis` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `trailer.damage.wheels` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `trailer.damage.total` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `trailer.licensePlate.value` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.licensePlate.country.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `trailer.licensePlate.country.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game.version` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game.config.isTrafficOffense` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `game.config.isFatigueEnabled` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `multiplayer.type` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `multiplayer.server` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `multiplayer.playerID` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `market.id` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `market.name` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `topSpeed` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   (in meters per second). |
| `avgSpeed` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   (in meters per second). |
| `income` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   ($ for ATS & € for ETS2). |
| `distanceDriven` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   (in km). |
| `plannedDistance` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   (in km). |
| `fuel.current` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `fuel.burned` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `fuel.purchased` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `realtime.start` | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) |
| `realtime.end` | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) |
| `realtime.timeTaken` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `expectedDeliveryTimestamp` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `deliveredTimestamp` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `earnedXP` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `events` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| `mods` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| `clientVersion` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `THP` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `THP_details` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `revenue` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `revenue_details` | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| `rating` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobID` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
