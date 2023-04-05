import asyncio
import json
import random
from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from channels_redis.core import RedisChannelLayer
from channels.layers import get_channel_layer

class RandomNumberConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        # Add the consumer to the "random_value" group
        await self.add_to_group("random_value")

        while True:
            await asyncio.sleep(1)
            number = random.uniform(1.5, 2.6)

            # Send the message to the group
            await self.channel_layer.group_send(
                "random_value",
                {
                    "type": "send_number",
                    "dimensionValue": number,
                },
            )

    async def send_number(self, event):
        await self.send(json.dumps({"dimensionValue": event["dimensionValue"]}))

    @database_sync_to_async
    async def add_to_group(self, group_name):
        # Get the Redis channel layer
        channel_layer = get_channel_layer()

        # Get the set of channels in the group
        group_key = channel_layer.group_name(group_name)
        channels_set = await channel_layer.redis.smembers(group_key)

        # Check if the set is at capacity
        capacity = 10  # Set the capacity limit to 10
        if len(channels_set) >= capacity:
            # Remove the oldest channel from the set
            oldest_channel = channels_set.pop()
            await channel_layer.redis.srem(group_key, oldest_channel)

        # Add the channel to the set
        await channel_layer.redis.sadd(group_key, self.channel_name)
