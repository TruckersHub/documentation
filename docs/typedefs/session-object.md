---
title: Session Object
---

# Session Object

```json
{
   sessions: [
      {
         start: 1780225536404,
         end: 1781248186837,
         drivingTiming: 557000,
         idleTiming: 495000,
         menuTiming: 245000,
         clientVersion: "2.1.1",
         gameVersion: "1.59.1.3",
         game: 1,
         "mods": [],
         mode: "Offline",
         multiplayer: {
            type: "TruckersMP",
            server: "Simulation 1",
            playerID: 531,
            gameTime: 34140376,
            unixTime: 1787188272000,
            eventServer: false
         },
         distance: 138,
         damage: {
            truck: 0,
            trailer: 0,
            cargo: 0
         },
         fuel: {
            burned: 49,
            purchase: {
               count: 0,
               amount: 0
            },
            warnings: 0
         },
         speed: {
            total: 7679.4862715005875,
            count: 451,
            top: 26.781333923339844,
            violations: 9,
            limitTiming: 251000,
            cruiseTiming: 0
         },
         jobs: {
            started: 1,
            completed: 1,
            cancelled: 0,
            autoParked: 1,
            simJobs: 0,
            income: 4982,
            distance: 137,
            xp: 137,
            THP: 0,
            revenue: 0,
            mass: 27432.30078125,
            late: 0
         },
         pauses: 12,
         harshEvents: {
            braking: 13,
            acceleration: 21,
            steering: 5,
            colissions: 0,
            speedBrakes: 0
         },
         timeline: [
            {
               time: 1780225536504,
               title: "User came Online"
            }
         ],
         warp: 1,
         "driver": {},
         drivingScore: 60.24,
         drivingScore_details: {
            safety: 91.52,
            speed: 40.71,
            smooth: 15.22,
            discipline: 96.52
         },
         performanceScore: 92.5,
         performanceScore_details: {
            completion: 100,
            damage: 100,
            delivery: 75,
            efficiency: 100
         },
         overallScore: 76.37
      }
   ],
   rank: {
      _id: 1,
      performanceScore: 92.5,
      drivingScore: 60.24,
      overallScore: null,
      totalScore: null,
      rank: 4
   },
   leaderboard: [
      {
         _id: 40084,
         username: "arturs_832",
         performanceScore: null,
         drivingScore: 86.68,
         overallScore: 89.59,
         totalScore: 89.59,
         rank: 1
      }
   ],
   drivers: 543
}
```

| Parameter | Type |
| --- | --- |
| `start` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `end` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `drivingTiming` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `idleTiming` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `menuTiming` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `clientVersion` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `game` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `mods` | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| `mode` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `multiplayer.type` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `multiplayer.server` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `multiplayer.playerID` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `multiplayer.gameTime` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `multiplayer.unixTime` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `multiplayer.eventServer` | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| `distance` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `damage.truck` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `damage.trailer` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `damage.cargo` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `fuel.burned` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `fuel.purchase.count` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `fuel.purchase.amount` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `fuel.warnings` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `speed.total` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `speed.count` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `speed.top` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `speed.violations` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `speed.limitTiming` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `speed.cruiseTiming` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.started` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.completed` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.cancelled` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.autoParked` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.simJobs` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.income` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.distance` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.xp` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.THP` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.revenue` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.mass` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `jobs.late` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `pauses` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `harshEvents.braking` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `harshEvents.acceleration` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `harshEvents.steering` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `harshEvents.colissions` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `harshEvents.speedBrakes` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `timeline.time` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `timeline.title` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `warp` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `driver` | [Driver Object](/typedefs/driver) |
| `drivingScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `drivingScore_details.safety` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `drivingScore_details.speed` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `drivingScore_details.smooth` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `drivingScore_details.discipline` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `performanceScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `performanceScore_details.completion` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `performanceScore_details.damage` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `performanceScore_details.delivery` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `performanceScore_details.efficiency` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `overallScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `rank._id` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `rank.performanceScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `rank.drivingScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `rank.overallScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `rank.totalScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `rank.rank` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `leaderboard._id` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `leaderboard.username` | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| `leaderboard.performanceScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `leaderboard.drivingScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `leaderboard.overallScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `leaderboard.totalScore` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `leaderboard.rank` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |
| `drivers` | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) |


In case of any issues faced feel free to ask out in our [discord server](https://discord.truckershub.in/) .
