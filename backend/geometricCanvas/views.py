from django.http import JsonResponse
import random
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
import asyncio
import logging

logger = logging.getLogger(__name__)

def generate_random_value(request):
        while True:
                asyncio.sleep(100)
                logger.info('This is an info message')
                value = random.uniform(1.5, 2.6)
                channel_layer = get_channel_layer()
                channel_layer.group_send("random_value", {"type": "send_random_value"})
                # async_to_sync(channel_layer.group_send)("random_value", {"type": "send_random_value"})
                return JsonResponse({"dimensionValue": value})
        # while True:
        #     await asyncio.sleep(100)
        #     logger.info('This is an info message')
        #     value = random.uniform(1.5, 2.6)
        #     await self.channel_layer.group_send(
        #         "random_value", {"type": "send_random_value", "dimensionValue": value}
        #     )
