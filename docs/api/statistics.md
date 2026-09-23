---
title: Statistics
---

Statistics API Calls are only for the VTCs who have atleast 1 boosts.

In order to recieve Statistics of your company, countries or drivers, you will need to perform following API Calls:

## Statistics endpoints

Use the pages in this section to find each endpoint.

---

## Your VTC Statistics

You can get your company's Statistics Data by making a `GET` request to `https://api.truckershub.in/v1/statistics`.

After a successfully call, your VTC statistics will be returned.

You can also include the date, month and year to get statistics from specific date, month or Year as a query parameter. `https://api.truckershub.in/v1/statistics?date=26&month=3&year=2024`

---

## Countries Statistics

You can get Statistics for Countries by making a `GET` request to `https://api.truckershub.in/v1/statistics/countries`.

After a successfully call, statistics for different countries will be returned.

You can also include the month and year to get statistics from specific month or Year as a query parameter. `https://api.truckershub.in/v1/statistics/countries?&month=3&year=2024`

---

## Company Statistics

You can get company Statistics Data by making a `GET` request to `https://api.truckershub.in/v1/statistics/company`.

After a successfully call, VTCs statistics will be returned.

You can also include the month and year to get statistics from specific month or Year as a query parameter. `https://api.truckershub.in/v1/statistics/company?&month=3&year=2024`

---

## Users Statistics

You can get All Users Statistics Data by making a `GET` request to `https://api.truckershub.in/v1/statistics/users`.

After a successfully call, Users statistics will be returned.

You can also include the month and year to get statistics from specific month or Year as a query parameter. `https://api.truckershub.in/v1/statistics/users?&month=3&year=2024`

---

## VTC Users Statistics

You can get VTC Drivers Statistics Data by making a `GET` request to `https://api.truckershub.in/v1/statistics/users/vtc`.

After a successfully call, VTC Users statistics will be returned.

You can also include the month and year to get statistics from specific month or Year as a query parameter. `https://api.truckershub.in/v1/statistics/users/vtc?&month=3&year=2024`