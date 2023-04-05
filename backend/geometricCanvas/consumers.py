import json
from channels.generic.websocket import AsyncWebsocketConsumer
import random
import asyncio
import logging

logger = logging.getLogger(__name__)

class RandomValueConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("random_value", self.channel_name)
        await self.accept()
        while True:
            await asyncio.sleep(1)
            logger.info('This is an info message')
            value = random.uniform(0.5, 2.6)
            await self.channel_layer.group_send(
                "random_value", {"type": "send_random_value", "dimensionValue": value}
            )
            await self.send(text_data=json.dumps({"dimensionValue": value}))


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("random_value", self.channel_name)

    async def receive(self, text_data):
        pass
