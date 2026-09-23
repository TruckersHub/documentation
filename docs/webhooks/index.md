---
title: Webhooks
---

Get notified about new events related to your company.

We, TruckersHub, notify your application about events using webhooks.

Note:-  
TruckersHub webhooks is NOT supported by discord. For Discord Webhooks we have different section under Discord category.  
  
For TruckersHub Webhooks, You should create your own application which receives data from TruckersHub.

# Configuring webhooks

Navigate to the [integrations page](https://truckershub.in/integrations) and add the webhook URL there.

Once your webhook is configured, TruckersHub will make a call for events you enabled. You will be getting the raw data which can be modified your way.

#### How webhooks work?

On every event fired, TruckersHub will be sending it to your configured webhooks. This means that you can receive the raw data of events like job started, job cancelled, etc. You can then use that information to update your hub.

The webhook system works by sending a `POST` request to the endpoint you specified. All data related to the event that took place will be inside the `POST` body.

#### Webhook retries

If the system receives a `HTTP/200` response status from your webhook URL server, we consider the webhook successful. If the application returns any other response status, we mark the webhook status as failed and will resend the same data again.

We will retry and send the webhook up to 3 times. If we receive a `non-HTTP/200` response code, or a timeout (of 5 seconds or more) for more than 3 times, we consider the webhook failed and will not resend that particular event.

If a webhook fails, you still have the option to resend a specific webhook or job.
